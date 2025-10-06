import React, {useState} from "react";
import {buttomsGroup} from '../constants'
import Cards from "./Cards";

import { proyectos } from "../constants";
import { styles } from "../styles";


const Project = () => {

    const [selectedId, setSelectedId] = useState("frontend"); // `id` predeterminado



    // Filtra los proyectos según el `selectedId`
    const filteredProjects = proyectos.filter((project) => project.id === selectedId);
    

    return (

        <section className={`${styles.paddinX} w-auto  p-5 mb-5 flex flex-col items-center `} >

          <h2 className={`${styles.heroHeadText}`}>Projects  <br /></h2>

          <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'  >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>

          <nav className='w-full flexinline-flex m-5 shadow-xs items-center groupbuttoms '>

                <ul>
                    {buttomsGroup.map((button) => (
                        <li
                        key={button.id}
                        className=" flex flex-row " 
                        onClick={() => (`Clicked on ${button.title}`)}
                        >
                           <button
                            onClick={() => setSelectedId(button.id)} 
                           type="button" 
                           className=" btn px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-4xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                           {button.title} 
                            </button> 
                        </li>
                    ))}
                </ul>
            </nav>

        <div className="mt-4 flex flex-wrap gap-4">
            {filteredProjects.map((project, id) => (
            <Cards key={`project-${id}`} {...project} />
            ))}
        </div>

    </section>

    )
}

export default Project;