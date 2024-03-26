import { styles } from "../styles";
import girlpng from "../assets/girlhero.png"


const Hero = () => {


  return (
    <section className={`relative w-full h-screen mx-auto`}>

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
            all aspects of the Asia Fertilizer market for Nitrogen and Ammonia.
            </p>
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
