import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles.js'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion.js'

const ServiceCard = ({ index, title, icon }) => {
  return (
    < Tilt className='xs:w-[250px] flex items-center '>

      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px]  flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}




export default function About() {
  return (
    <>
      <motion.div variants={textVariant()}
        className='mt-4 text-secundary text-[17px] max-w-3xl leading-[30px]'>
        <p className='{styles.sectionSubText}'>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Magni velit modi rerum eum odio voluptate
        impedit saepe maxime ipsum ad, corrupti voluptates!
        Explicabo facere iusto quas reprehenderit porro.
        Exercitationem, debitis.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>
    </>
  )
}
