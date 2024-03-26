import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center pb-20'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Contact />
        {/* <div className='relative z-0 bg-[#0b0a0f]'>
          
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
