import React, { useState, useEffect, Suspense } from 'react';
import { Application } from '@splinetool/runtime';
import gsap from "gsap";
import CanvasLoader from "../Loader";

const KeyboardAnimation = () => {



  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);

    app
      .load("https://prod.spline.design/TfhgW5UD7n9wIS5w/scene.splinecode")
      .then(() => {
        app.camera.controls.enableZoom = false;
        setIsLoading(false); // Once the model is loaded, set isLoading to false
        startKeyPressAfterRender(); // Start keyboard animation
      })


      const targetString = " Lee Chuan";
      let currentIndex = 0;
      let keyPressInterval;

      
      // Function to simulate keydown event
      function simulateKeyDown(char) {
        const event = new KeyboardEvent("keydown", {
          key: char,
          bubbles: true
        });
        console.log(char)
        document.dispatchEvent(event);
      }
      
      // Function to start simulating key presses after render of the spline model
      function startKeyPressAfterRender() {
        currentIndex = 0; // Reset currentIndex
        keyPressInterval = setInterval(() => {
          simulateKeyDown(targetString[currentIndex]);
          currentIndex++;
          if (currentIndex === targetString.length) {
            clearInterval(keyPressInterval);
            console.log(currentIndex)
      
          }
        }, 300); // Each keypress interval
      }
      
      // Start simulating key presses after render of the spline model
      setTimeout(startKeyPressAfterRender,300);  

  }, []);

  return (
    <div className="canvas-cont">
    <canvas id="canvas3d"></canvas>
    </div>
  ); // Since this component doesn't render anything directly
};

export default KeyboardAnimation;

