import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Reads from "./pages/reads";
import Blog from "./pages/blog";

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works} from "./components";

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Portfolio />}></Route>
            <Route path="/reads" element={<Reads />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
        </Router>
    // <BrowserRouter>
    //   <div className='relative z-0 bg-primary'>
    //     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center pb-20'>
    //       <Navbar />
    //       <Hero />
    //     </div>
    //     <About />
    //     <Experience />
    //     <Works />
    //     <Contact />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
