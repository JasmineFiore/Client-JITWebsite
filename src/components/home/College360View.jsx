import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function College360View({ imageUrl }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true); // 👈 track loading state

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera — positioned at origin inside the sphere
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Texture loader with callback for load complete
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      imageUrl,
      () => {
        setLoading(false); // 👈 hide loader when image loaded
      },
      undefined,
      (error) => {
        console.error("Failed to load texture:", error);
        setLoading(false);
      }
    );

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Drag controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let lon = 0;
    let lat = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      containerRef.current.style.cursor = "grabbing";
    };
    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        lon -= deltaX * 0.1;
        lat += deltaY * 0.1;
        lat = Math.max(-85, Math.min(85, lat));
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };
    const onMouseUp = () => {
      isDragging = false;
      containerRef.current.style.cursor = "grab";
    };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);

      const lookAtVector = new THREE.Vector3(x, y, z);
      camera.lookAt(lookAtVector);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.remove();
    };
  }, [imageUrl]);

  return (
    <div className="w-full max-w-full p-1 bg-gradient-to-r from-yellow-50 via-yellow-100 to-blue-100 flex justify-center mt-5">
      <div className="w-full relative">
        

        {/* Three.js container */}
        <div
          ref={containerRef}
          className="w-full h-[400px] relative cursor-grab rounded-lg overflow-hidden"
          style={{ userSelect: "none" }}
        >
          {/* Loader Overlay */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
              <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-700 font-medium animate-pulse">
                Loading 360° View...
              </p>
            </div>
          )}
        </div>
        
      </div>
      
      
    </div>
    
  );
}
