import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { useConstants } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const ServiceCard = ({ index, title, icon }) => (
  
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      key={index}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`orange-yellow-gradient w-full pb-[4px] pt-[1px] pl-[1px] pr-[2px] rounded-[20px] shadow-card2 `}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-white rounded-[20px] text-black-100 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-transparent hover:text-white hover:cursor-pointer`}
        // className={`rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col
        //   ${index % 2 == 0 ? 'bg-white-100 text-[#FF662D]' : 'bg-[#FF662D] text-white bg-opacity-70'}`}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { services } = useConstants();
  const { t, i18n } = useTranslation(); // Lấy ngôn ngữ hiện tại
  
  return (
    <div>
      <motion.div variants={textVariant()}>
        <div className="flex flex-row">
          <div className='w-1 h-16 md:h-24 sm:h-20 bg-light-orange mr-5 mt-1' />
          <div className="flex flex-col">
            <p className={styles.sectionSubText}>{t("about.introduction")}</p>
            <h2 className={styles.sectionHeadText}>{t("about.overview")}.</h2>
          </div>
        </div>
        
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-black ml-5 leading-[28px] text-justify ${styles.heroSubText}`}
      >
        {t("about.description")}
      </motion.p>

      <div className='justify-center ml-5 mt-16 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard title={service.title} index={index} {...service} />
        ))}
      </div>

      {/* <div className='justify-center ml-5 mt-28 flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <Tech 
            key={technology.name} 
            index={index}  
            icon={technology.icon}
            label={technology.name}
          />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "ABOUT");
