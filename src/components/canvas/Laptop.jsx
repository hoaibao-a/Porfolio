import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Laptops = ({ isMobile }) => {
  const computer = useGLTF("./3d_models/gaming_laptop/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.8}
        position={[0, -0.5, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const LaptopsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-[350px] h-[600px]">
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ 
          position: [0, 0, 5], fov: 60, 
        }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full" 
        
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 4}
          />
          <Laptops isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default LaptopsCanvas;
