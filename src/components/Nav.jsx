import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from "../styles";
import {navLinks} from "../constants";
import {logo, menu, close} from "../assets/menu";


const Nav = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll)
  }
)

  return (
    
    <nav id='nave' className={`${styles.paddinX} w-full flex items-center py-5 fixed top-0 z-20 glass-gradient `}>

      <div className=' w-full flex justify-between items-center max-w-7xl mx-auto '>

      <Link to="/" 
          className='flex items-center gap-2' 
          onClick={() => { setActive("")
            window.scroll(0,0);
          }}
        >
          <img id='logo'className='w-12 h-12  mr-3 rounded-[100px] object-contain ' src="../logo.png" alt="logo" />

          <h1 className='text-white text-[18px] font-bold cursor-pointer flex' >Adonis Daller | 
            <span className='sm:block hidden'> Full Stack</span> 
          </h1>
        </Link>
        
        <ul  className='list-none hidden sm:flex flex-row gap-10' >
          {navLinks.map((Link) => (
            <li key={Link.id}
              className={`${active=== Link.title ? 'text-white' : 'text-gray/100'} cursor-pointer transition duration-300 ease-in-out hover:text-lime-400`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`${Link.id}`}> {Link.title} </a>

            </li>
          ))}

        </ul>

        <div className=' sm:hidden flex flex-1 justify-end items-center ' > 

          <img src={toggle ? close : menu} alt="menu" className={` w-[28px] h-[28px] object-contain cursor-pointer 
          ${toggle ? 'rotate-180' : 'rotate-0'} transition-transform duration-700`}
            onClick={()=> setToggle(!toggle)}
          />

          <div  className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            <ul className='lis-note flex justify-end items-start  flex-1 flex-col gap-4 '>

            {navLinks.map((Link) => (
              
              <li id='menu' key={Link.id}
                className={`${active=== Link.title ? 'text-white' : 'text-gray/100'} cursor-pointer transition duration-300 ease-in-out 
              hover:text-lime-400  `}
                onClick={() => setActive(Link.title)}
              >
                <a href={`${Link.id}`}> {Link.title} </a>

              </li>
            ))}
            </ul>
          </div>
          
        </div>
      
      </div>

    </nav>


  )
}

export default Nav;