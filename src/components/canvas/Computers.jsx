import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  // Load model directly from public directory
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Ambient & Fill Lighting */}
      <ambientLight intensity={0.65} />
      <hemisphereLight intensity={0.5} skyColor="#ffffff" groundColor="#444444" />
      <pointLight intensity={2} position={[0, -2, 0]} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1500}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.68 : 0.75}
        /* Moved down by changing Y to -3.9 */
        position={isMobile ? [0, -3.9, -2.2] : [0, -3.9, -2.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 0, 0], fov: 28 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          target={[0, -1.2, 0]}
          enableRotate
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          maxPolarAngle={Math.PI / 2 + 0.35}
          minPolarAngle={Math.PI / 2 - 0.35}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;