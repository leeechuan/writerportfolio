import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import KeyboardAnimation from "./canvas/Keyboard";
import { useEffect, Suspense } from "react";
import CanvasLoader from "./Loader";




const Hero = () => {

  useEffect(() => {
    // Function to handle key presses and simulate typing effect
    function handleKeyPress(event) {
      const textElement = document.getElementById('name-text');
      if (!textElement) return; // Ensure element exists

      // Check if the length of the text content is less than 10 characters
      if (textElement.textContent.length < 10) {
        // Append the pressed key to the text content of the element
        textElement.textContent += event.key;
      }

      if (textElement.textContent.length === 10) {
        // Append the pressed key to the text content of the element
        textElement.textContent = " Lee Chuan";
      }


    }
  
    // Add event listener to detect key presses
    document.addEventListener('keydown', handleKeyPress);
  
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  
  // function typeWriter() {
  //   const textElement = document.getElementById('name-text');
  //   if (!textElement) return; // Ensure element exists
  //   const text = " Lee Chuan";
  //   if (index < text.length) {
  //     textElement.textContent += text.charAt(index);
  //     index++;
  //     setTimeout(typeWriter, 100); // Adjust typing speed here (in milliseconds)
  //   }
  // }
  
  // let index = 0; // Declare index outside the function
  
  // useEffect(() => {
  //   typeWriter()
  // }, [])

  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00cea8]' />
          <div className='w-1 sm:h-80 h-40 cyan-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>
            Hi, I'm 
            <span className='cyan-text-gradient' id='name-text'></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            I develop web applications, user <br className='sm:block hidden' />
            interfaces and backend services
          </p>
          
        <KeyboardAnimation></KeyboardAnimation>
        </div>
      
        

      </div>

      {/* <KeyboardAnimation></KeyboardAnimation> */}
      {/* <ComputersCanvas /> */}
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
