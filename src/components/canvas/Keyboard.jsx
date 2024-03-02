import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import gsap from "gsap";


const KeyboardAnimation = () => {

  useEffect(() => {
    
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);

    app
      .load("https://prod.spline.design/uZEocBpkqwKrhJ0D/scene.splinecode")

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
        }, 500); // Each keypress interval is 2 seconds
      }
      
      // Start simulating key presses after render of the spline model
      setTimeout(startKeyPressAfterRender,3000);  

  }, []);

  return null; // Since this component doesn't render anything directly
};

export default KeyboardAnimation;

