import { styles } from "../styles";
import girlpng from "../assets/girlhero2.png";
import { useNavigate } from "react-router-dom";


const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className={`relative w-full xl:h-[50vw] lg:h-[60vw] md:h-[70vw] sm:h-[130vw] xxs:h-[150vw] h-[200vw] mx-auto`}>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className="md:flex block">
          
          <div className="md:w-6/12 flex-1 display-flex my-auto w-full">
            <h1 className={`${styles.heroHeadText} text-secondary`}>
              Hi, I'm 
              <span className='' id='name-text'> Dinise</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            a market reporter, focusing on covering   <br className='sm:block hidden' />
            all aspects of the Asia Fertilizer market for Nitrogen and Ammonia. <br className='sm:block hidden' />
            </p>
            <div className="pt-8">
              <a className={`${styles.heroSubText} mt-2 text-secondary inline-flex items-center font-medium cursor-pointer underline hover:text-white`} onClick={() => navigate("/reads") }>My reads
                <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
            <div>
              <a className={`${styles.heroSubText} mt-2 text-secondary inline-flex items-center font-medium cursor-pointer underline hover:text-white`} onClick={() => navigate("/blog") }>My thoughts
                <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>

            

            
          </div>

          <div className="md:w-6/12 flex-1 w-9/12 mx-auto">
            <img src={girlpng}></img>
          </div>
          
          
        </div>
      
        

      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        </a>
      </div>
    </section>
  );
};

export default Hero;
