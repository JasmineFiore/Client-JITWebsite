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

    // --- ZOOM SETTINGS ---
    let zoom = 75;
    const minZoom = 40;
    const maxZoom = 100;

    const applyZoom = () => {
      camera.fov = zoom;
      camera.updateProjectionMatrix();
    };

    // Renderer  ✅ MUST BE ABOVE any renderer. calls
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

    // --- Scroll wheel zoom ---
    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();

      zoom += e.deltaY * 0.05;
      zoom = Math.max(minZoom, Math.min(maxZoom, zoom));
      applyZoom();
    };

    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

    // --- Zoom Button Events ---
    const zoomInListener = () => {
      zoom -= 5;
      zoom = Math.max(minZoom, zoom);
      applyZoom();
    };

    const zoomOutListener = () => {
      zoom += 5;
      zoom = Math.min(maxZoom, zoom);
      applyZoom();
    };

    window.addEventListener("zoom-in", zoomInListener);
    window.addEventListener("zoom-out", zoomOutListener);

    // Rotation controls
    let isDragging = false;
    let lon = 0;
    let lat = 0;
    let velocityX = 0;
    let velocityY = 0;
    let previousX = 0;
    let previousY = 0;

    const speed = 0.3;
    const inertia = 0.95;

    const onPointerDown = (e) => {
      isDragging = true;
      previousX = e.clientX;
      previousY = e.clientY;
      containerRef.current.style.cursor = "grabbing";
    };

    const onPointerMove = (e) => {
      if (isDragging) {
        const dx = e.clientX - previousX;
        const dy = e.clientY - previousY;

        lon -= dx * speed;
        lat += dy * speed;

        velocityX = dx * speed;
        velocityY = dy * speed;

        previousX = e.clientX;
        previousY = e.clientY;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      containerRef.current.style.cursor = "grab";
    };

    renderer.domElement.addEventListener("mousedown", onPointerDown);
    renderer.domElement.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    // Touch support
    renderer.domElement.addEventListener("touchstart", (e) =>
      onPointerDown(e.touches[0])
    );
    renderer.domElement.addEventListener("touchmove", (e) =>
      onPointerMove(e.touches[0])
    );
    renderer.domElement.addEventListener("touchend", onPointerUp);

    // Auto rotate
    let autoRotate = false;
    const autoRotateSpeed = 0.05;

    const animate = () => {
      requestAnimationFrame(animate);

      if (!isDragging) {
        lon -= velocityX;
        lat += velocityY;

        velocityX *= inertia;
        velocityY *= inertia;

        if (autoRotate) lon += autoRotateSpeed;
      }

      lat = Math.max(-85, Math.min(85, lat));

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

    return () => {
      renderer.domElement.removeEventListener("wheel", onWheel);
      window.removeEventListener("zoom-in", zoomInListener);
      window.removeEventListener("zoom-out", zoomOutListener);
      window.removeEventListener("resize", handleResize);

      renderer.domElement.remove();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
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
