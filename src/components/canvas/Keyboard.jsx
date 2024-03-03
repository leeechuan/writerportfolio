import React, { useState, useEffect, Suspense } from 'react';
import { Application } from '@splinetool/runtime';
import gsap from "gsap";
import CanvasLoader from "../Loader";
import keyboard from "../../assets/keyboard.png"

const KeyboardAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = document.getElementById("canvas3d");

    if (isMacOrAndroid()) {
      // If the user's OS is Mac or Android, show an image instead of using spline code
      const image = document.createElement("img");
      image.src = keyboard; // Replace "path_to_your_image.jpg" with the actual path to your image
      image.onload = () => {
        canvas.parentNode.replaceChild(image, canvas);
        setIsLoading(false);
      };
    } else {
      const app = new Application(canvas);
      app
        .load("https://prod.spline.design/uZEocBpkqwKrhJ0D/scene.splinecode")
        .then(() => {
          app.camera.controls.enableZoom = false;
          setIsLoading(false);
          startKeyPressAfterRender();
        });
    }

    function isMacOrAndroid() {
      const userAgent = navigator.userAgent.toLowerCase();
      console.log(userAgent)
      return /macintosh|mac os x/.test(userAgent) || /android/.test(userAgent) || /edg/.test(userAgent);
    }

    const targetString = " Lee Chuan";
    let currentIndex = 0;
    let keyPressInterval;

    function simulateKeyDown(char) {
      const event = new KeyboardEvent("keydown", {
        key: char,
        bubbles: true
      });
      console.log(char);
      document.dispatchEvent(event);
    }

    function startKeyPressAfterRender() {
      currentIndex = 0;
      keyPressInterval = setInterval(() => {
        simulateKeyDown(targetString[currentIndex]);
        currentIndex++;
        if (currentIndex === targetString.length) {
          clearInterval(keyPressInterval);
          console.log(currentIndex);
        }
      }, 500);
    }

    setTimeout(startKeyPressAfterRender, 1000);
  }, []);

  return (
    <div className="canvas-cont">
      <canvas id="canvas3d"></canvas>
    </div>
  );
};

export default KeyboardAnimation;