import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works} from "../components";

function Portfolio(){
    return(    
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center pb-20'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Works />
            <Contact />
        </div>
    )
}

export default Portfolio