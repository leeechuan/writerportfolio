import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    
    <mesh>
      
      <hemisphereLight intensity={3} groundColor='black' />
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
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};



// const Computers = ({ isMobile }) => {
//   // Create a scene
//   const scene = new THREE.Scene();

//   // Add hemisphere light for ambient light
//   const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5); // Adjust intensity as needed
//   scene.add(hemisphereLight);

//   // Return null or an empty fragment to comply with JSX requirements
//   return null;
// };

// export default Computers;



// const Computers = ({ isMobile }) => {
//   // Create a scene
//   const scene = new THREE.Scene();

//   // Add hemisphere light
//   const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.15);
//   scene.add(hemisphereLight);

//   // Add spot light
//   const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 9, 1);
//   spotLight.position.set(-20, 50, 10);
//   spotLight.castShadow = true;
//   scene.add(spotLight);

//   // Add point light
//   const pointLight = new THREE.PointLight(0xffffff, 1);
//   scene.add(pointLight);

//   // Load the GLTF model
//   const loader = new GLTFLoader();
//   loader.load(
//     './desktop_pc/scene.gltf',
//     (gltf) => {
//       const computer = gltf.scene;

//       // Set position, scale, rotation of the computer
//       computer.scale.set(isMobile ? 0.7 : 0.75, isMobile ? 0.7 : 0.75, isMobile ? 0.7 : 0.75);
//       computer.position.set(isMobile ? 0 : 0, isMobile ? -3 : -3.25, isMobile ? -2.2 : -1.5);
//       computer.rotation.set(-0.01, -0.2, -0.1);

//       // Add the computer to the scene
//       scene.add(computer);
//     },
//     undefined,
//     (error) => {
//       console.error('Error loading GLTF model', error);
//     }
//   );

//   return null; // Since we're using plain Three.js, there's no need to return JSX
// };

// export default Computers;

const ComputersCanvas = () => {
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
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

