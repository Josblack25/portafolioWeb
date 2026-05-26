'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import proyectos from '../constants/project';
import Cards from './ui/cards/Cards';

interface Project {
    id: string;
    title: string;
    descriptionFront: string;
    descriptionBack: string;
    functionalityFront: string[];
    functionalityBack: string[];
    tagsFront: any[];
    tagsBack: any[];
    image: any;
    source_code_link: string;
}



export default function Projects() {

    const [selectId, setSelectId] = useState('fullstack')

    // filtrar los proyectos segun el id seleccionado
    const filteredProjects = proyectos.filter(project => project.id === selectId);

    return (
        <section id="projects" className='py-12 w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center '>

            <div className='w-full mb-10 flex flex-col items-center'>
                <h2 className='text-4xl md:text-5xl lg:text-[4.5rem] text-primary font-black text-center mb-6 '>Mis Proyectos</h2>

                <div className=' w-full md:w-[60%] flex justify-center text-center '>
                    <p className='text-base md:text-lg lg:text-[1.3rem] text-on-surface leading-relaxed'>Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se
                        describe brevemente con enlaces a repositorios de código y demostraciones en vivo. Esto refleja mi capacidad para resolver
                        problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos eficazmente.
                    </p>
                </div>
            </div>


            {/* <AnimatePresence></AnimatePresence> */}
            <AnimatePresence mode="wait">
                <motion.div
                    className=' w-full flex flex-wrap justify-center gap-8 mt-2'
                    key={selectId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {filteredProjects.map((project, id) => (
                        <Cards key={`project-${id}`}{...project} />
                    ))}
                </motion.div>
            </AnimatePresence>

        </section>
    );
}