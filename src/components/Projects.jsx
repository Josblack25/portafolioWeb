import { useState } from "react";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { buttomsGroup } from '../constants'
import Cards from "./Cards";

import { proyectos } from "../constants";
import { styles } from "../styles";


export default function Projects() {

    const [selectedId, setSelectedId] = useState("frontend"); // `id` predeterminado



    // Filtra los proyectos según el `selectedId`
    const filteredProjects = proyectos.filter((project) => project.id === selectedId);


    return (

        <section id="projects" className={`${styles.paddinX} w-auto flex flex-col items-center m-5 p2`} >

            <h2 className={`${styles.heroHeadText} `}>Projects</h2>

            <details class="text-secondary text-[17px] max-w-3xl leading-[30px] mt-3">
                <summary class="cursor-pointer text-lime-400 hover:underline transition duration-300">
                    Ver más ▼
                </summary>
                <p class="mt-2">
                    Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo.
                    Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo.
                    Esto refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos eficazmente.
                </p>
            </details>

            <nav className='w-full flex inline-flex m-5 shadow-xs items-center groupbuttoms '>

                <ul className="flex gap-4">
                    {buttomsGroup.map((button) => (
                        <motion.li
                            key={button.id}
                            className="btn-projects"
                            onClick={() => setSelectedId(button.id)}
                            animate={{
                                backgroundColor:
                                    button === selectedId ? "#eee" : "#eee0",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <button type="button" className="btn-c">
                                {button.title}
                            </button>
                            {button.id === selectedId && (
                                <motion.div
                                    layoutId="underline"
                                    className="bar-c absolute bottom-0 left-0 w-full h-[3px] rounded-full"

                                />

                            )}
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Animación de proyectos filtrados */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="card-project w-full h-auto mt-2 mb-4 flex  justify-center-safe gap-4"
                >
                    {filteredProjects.map((project, id) => (
                        <Cards key={`project-${id}`} {...project} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
