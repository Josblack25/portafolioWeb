import React, { useState } from 'react';
import { proyectos} from '../constants'
import {github} from '../assets/tech'
import { styles } from '../styles'




  
const Cards= ({id, name, description, tags,  image,  source_code_link,  }) => {

  const [rotate, setrotate] = useState(false); // rotacion de las tarjetas
    

    return (

      <div className={`${styles.paddinX} card-container container relative  sm:w-[560px] w-full  flex items-center justify-center gap-3.5 rounded-3xl 
      ${rotate ? 'rotateY-180' : 'rotateY-  0'}`} 
      
      onClick={() => setrotate(!rotate)}
      >


        <div className={`${styles.paddinX} card borde border-violet-700 w-[650px]  h-[400px]
          `}>
            
            <div className='front borde  bg-violet-500 '>

                <img src={image} alt="preject-image" className='w-full h-full object-center rounded '/>

                <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
                  
                </div>
            </div>

            <div className=' flex flex-col p-5 back  bg-blue-800 '>

              <div
                onClick={()=> window.open(source_code_link, '_black')}

                className='bg-stone-500 w-10 h-10 rounded-full m-   items-end justify-end cursor-pointer  '>

                <img src={github} alt="source code" className='w-auto h-auto object-contain' />

              </div>
              <div className='flex justify-center p-3 items-start h-full '>
                <h3 className='text-white font-bold text-[24px] '> {name} </h3>
                <p className='mt-2 text-amber-200 text-[14px] '> {description} </p>
              </div>

              <div className='mt-4 flex flex-wrap gap-2 '>
                  {tags.map((tag) => (
                      <p key={`${name}-${tag.name}`}
                      className={`text-[14px]`}
                      >
                          {tag.name}
                      </p>
                  ))}
              </div>
            </div>
            
          </div>  
        </div>

    )
}





export default Cards;
