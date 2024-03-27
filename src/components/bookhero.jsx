import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";


const BookHero = () => {

  const navigate = useNavigate();

  return (
    <>
      
      <motion.div variants={textVariant()}>
        <a className={`${styles.sectionSubText} mt-2 text-secondary inline-flex items-center font-medium cursor-pointer underline hover:text-white`} onClick={() => navigate("/") }>Back to portfolio
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" style={{ transform: 'rotate(180deg)' }}>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </a>
        {/* <p className={styles.sectionSubText}>My Reads</p> */}
        <h2 className={styles.sectionHeadText}>My Reads.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Welcome to my personal sanctuary of literary exploration! 
      As an avid reader and passionate bibliophile, I've cultivated a profound love 
      for the written word since childhood.
      This is a collection of literary pieces I have picked up recently. Click into the
      books to read about my personal insights, and recommendations!

      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(BookHero, "bookhero");
