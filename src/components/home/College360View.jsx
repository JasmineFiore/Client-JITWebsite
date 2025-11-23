import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function College360View({ imageUrl }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!containerRef.current) return;

  const width = containerRef.current.clientWidth;
  const height = containerRef.current.clientHeight;

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 0);

  // Zoom settings
  let zoom = 75;
  const minZoom = 40;
  const maxZoom = 100;

  const applyZoom = () => {
    camera.fov = zoom;
    camera.updateProjectionMatrix();
  };

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  containerRef.current.appendChild(renderer.domElement);

  // Load Texture
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    imageUrl,
    () => setLoading(false),
    undefined,
    () => setLoading(false)
  );

  // Sphere
  const geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Wheel Zoom
  const onWheel = (e) => {
    e.preventDefault();
    zoom += e.deltaY * 0.05;
    zoom = Math.max(minZoom, Math.min(maxZoom, zoom));
    applyZoom();
  };
  renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

  // Zoom Buttons
  const zoomInListener = () => {
    zoom = Math.max(minZoom, zoom - 5);
    applyZoom();
  };

  const zoomOutListener = () => {
    zoom = Math.min(maxZoom, zoom + 5);
    applyZoom();
  };

  window.addEventListener("zoom-in", zoomInListener);
  window.addEventListener("zoom-out", zoomOutListener);

  // ------------------------------
  // 🎉 NEW IMPROVED TOUCH + DRAG CONTROLS
  // ------------------------------
  let isDragging = false;
  let lon = 0;
  let lat = 0;
  let velocityX = 0;
  let velocityY = 0;
  let previousX = 0;
  let previousY = 0;

  const speed = 0.15;   // smoother
  const inertia = 0.93; // smoother friction

  // Pointer (mouse)
  const onPointerDown = (e) => {
    isDragging = true;
    previousX = e.clientX;
    previousY = e.clientY;
    containerRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - previousX;
    const dy = e.clientY - previousY;

    lon -= dx * speed;
    lat += dy * speed;

    velocityX = dx * 0.08; 
    velocityY = dy * 0.08;

    previousX = e.clientX;
    previousY = e.clientY;
  };

  const onPointerUp = () => {
    isDragging = false;
    containerRef.current.style.cursor = "grab";
  };

  // ------------------------------
  // 🎉 TOUCH + PINCH ZOOM
  // ------------------------------
  let lastPinchDistance = null;

  const getPinchDistance = (touches) => {
    const dx = touches[0].pageX - touches[1].pageX;
    const dy = touches[0].pageY - touches[1].pageY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      isDragging = true;
      previousX = t.pageX;
      previousY = t.pageY;
    }

    if (e.touches.length === 2) {
      lastPinchDistance = getPinchDistance(e.touches);
    }
  };

  const onTouchMove = (e) => {
    e.preventDefault(); // ⚡ prevents browser scroll interfering

    // One-finger drag
    if (e.touches.length === 1 && isDragging) {
      const t = e.touches[0];
      const dx = t.pageX - previousX;
      const dy = t.pageY - previousY;

      lon -= dx * speed;
      lat += dy * speed;

      velocityX = dx * 0.08;
      velocityY = dy * 0.08;

      previousX = t.pageX;
      previousY = t.pageY;
    }

    // Two-finger pinch zoom
    if (e.touches.length === 2) {
      const newDistance = getPinchDistance(e.touches);
      if (lastPinchDistance) {
        const delta = lastPinchDistance - newDistance;
        zoom += delta * 0.05;
        zoom = Math.max(minZoom, Math.min(maxZoom, zoom));
        applyZoom();
      }
      lastPinchDistance = newDistance;
    }
  };

  // Add event listeners
  renderer.domElement.addEventListener("mousedown", onPointerDown);
  renderer.domElement.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);

  renderer.domElement.addEventListener("touchstart", onTouchStart, { passive: false });
  renderer.domElement.addEventListener("touchmove", onTouchMove, { passive: false });
  renderer.domElement.addEventListener("touchend", onPointerUp);

  // ------------------------------
  // Animation loop
  // ------------------------------
  const animate = () => {
    requestAnimationFrame(animate);

    if (!isDragging) {
      lon -= velocityX;
      lat += velocityY;

      velocityX *= inertia;
      velocityY *= inertia;
    }

    lat = Math.max(-85, Math.min(85, lat));
    lon = (lon + 360) % 360; // smooth wrap

    const phi = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(lon);

    camera.lookAt(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta)
    );

    renderer.render(scene, camera);
  };

  animate();

  // Resize
  const handleResize = () => {
    const newWidth = containerRef.current.clientWidth;
    const newHeight = containerRef.current.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  };

  window.addEventListener("resize", handleResize);

  // Cleanup
  return () => {
    renderer.domElement.removeEventListener("wheel", onWheel);

    renderer.domElement.removeEventListener("mousedown", onPointerDown);
    renderer.domElement.removeEventListener("mousemove", onPointerMove);
    window.removeEventListener("mouseup", onPointerUp);

    renderer.domElement.removeEventListener("touchstart", onTouchStart);
    renderer.domElement.removeEventListener("touchmove", onTouchMove);
    renderer.domElement.removeEventListener("touchend", onPointerUp);

    window.removeEventListener("zoom-in", zoomInListener);
    window.removeEventListener("zoom-out", zoomOutListener);
    window.removeEventListener("resize", handleResize);

    renderer.dispose();
    geometry.dispose();
    material.dispose();
    texture.dispose();
    renderer.domElement.remove();
  };
}, [imageUrl]);


  return (
    <div className="w-full min-h-[450px] p-1 bg-linear-to-r from-yellow-50 via-yellow-100 to-blue-100 mt-5 flex justify-center">
      <div className="w-full relative">
        <div
          ref={containerRef}
          className="w-full h-[450px] rounded-lg overflow-hidden cursor-grab relative"
          style={{ userSelect: "none" }}
        >
          {loading && (
            <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-10">
              <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-700 font-medium animate-pulse">
                Loading 360° View...
              </p>
            </div>
          )}

          {/* Zoom Buttons */}
          <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
            <button
              onClick={() => window.dispatchEvent(new Event("zoom-in"))}
              className="px-3 py-1 cursor-pointer rounded-md bg-black/50 text-white"
            >
              +
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event("zoom-out"))}
              className="px-3 py-1 cursor-pointer rounded-md bg-black/50 text-white"
            >
              –
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
