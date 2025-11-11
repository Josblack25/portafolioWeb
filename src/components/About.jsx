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
        className='w-[200px] violet-gradient p-1 rounded-[20px] shadow-card border-1 border-waidth '>
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
    <div id="about" className=" mt-5 mb-7 flex items-center aling-center flex-col">

      <motion.div
        variants={textVariant()}
        className='m-2 p-2 text-tercero text-[25px] max-w-3xl leading-[30px] items-center'>

        <h2 className={`${styles.sectionHeadText}  mt-6 p-2 mb-4`}>
          Sobre Mi
        </h2>
      </motion.div>
      
      <details className="max-w-3xl text-[17px] leading-[30px] mt-3">
        <summary className="cursor-pointer text-lime-400 hover:underline transition duration-300">
          Ver más
        </summary>

        <p className="details-text max-w-[1000px] m-5 p-2 text-lg">
          Todo comenzó con una hoja en blanco y una idea: ¿cómo puedo construir algo que no solo funcione, sino que se vea, se entienda y se celebre?
          Soy Adonis, desarrollador autodidacta que aprendió a programar entre cursos gratuitos, bootcamps intensivos.
          Hoy, diseño sistemas interactivos con React, Flask, AWS, entre otros.
          He desarrollado dashboards, sistemas CRUD y interfaces animadas que celebran cada clic, detecto errores y los documento para que no vuelvan.
          Mis proyectos no solo resuelven problemas: los convierten en experiencias visuales. Hoy, mi meta es reforzar mi perfil presentando cada avance como una pieza de diseño funcional. Porque para mí, cada bug corregido, cada animación fluida y cada tabla bien estructurada es una victoria que merece ser compartida.
        </p>
      </details>





      <div className='m-6  w-full flex justify-center items-center flex-wrap gap-10 ms:flex-col'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>
    </div>
  )
}
