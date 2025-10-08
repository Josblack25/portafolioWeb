// Importación de React y hooks necesarios
import { useEffect, useState } from 'react';

// Importación de Link para navegación interna sin recarga
import { Link as ScrollLink } from 'react-scroll'

// Importación de estilos globales
import { styles } from "../styles";
// Importación de enlaces de navegación definidos en constantes
import { navLinks } from "../constants";
// Importación de imágenes para logo y botones de menú
import { logo, menu, close } from "../assets/menu";

// Componente funcional Nav
export default function Nav() {

  // Estado para controlar qué enlace está activo
  const [active, setActive] = useState('');
  // Estado para mostrar u ocultar el menú hamburguesa en móviles
  const [toggle, setToggle] = useState(false);
  // Estado para detectar si el usuario ha hecho scroll
  const [scrolled, setScrolled] = useState(false);

  // Efecto que se ejecuta al montar el componente
  useEffect(() => {
    // Función que se activa al hacer scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Si el scroll supera los 100px, se activa el estado scrolled
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Se agrega el listener al evento scroll
    window.addEventListener("scroll", handleScroll);

    // Limpieza del efecto al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Renderizado del componente
  return (
    // Barra de navegación fija con estilos y fondo tipo glass
    <nav id='nave' className={`${styles.paddinX} w-full flex items-center py-5 fixed top-0 z-20
     ${scrolled ? 'nav-bg' : 'bg-blue-80 shadow-lg'} transition-colors duration-500`}>

      {/* Contenedor principal centrado */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo y título */}
        <ScrollLink to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // Reinicia el estado activo
            window.scroll(0, 0); // Hace scroll al tope
          }}
        >
          {/* Imagen del logo */}
          <img id='logo' className='w-12 h-12 mr-3 rounded-[100px] object-contain' src="../logo.png" alt="logo" />

          {/* Título con nombre y rol */}
          <h1 className={`text-white text-[18px] font-bold cursor-pointer flex `}>
            Adonis Daller | <span className='sm:block hidden'> Full Stack</span>
          </h1>
        </ScrollLink>

        {/* Menú horizontal para pantallas grandes */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item) => (
            <li key={item.id}
              className={`${active === item.title ? 'text-white' : 'text-gray/100'} cursor-pointer transition duration-300 ease-in-out hover:text-lime-400`}
            // Marca el enlace como activo
            >
              <ScrollLink
                to={item.id}
                smooth={true}
                offset={-100} // Ajusta según tu layout
                duration={500}
                onClick={() => setActive(item.title)}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Menú hamburguesa para móviles */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Ícono de menú o cierre */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain cursor-pointer ${toggle ? 'rotate-180' : 'rotate-0'} transition-transform duration-700`}
            onClick={() => setToggle(!toggle)} // Alterna el estado del menú
          />

          {/* Panel flotante del menú hamburguesa */}
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='lis-note flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((item) => (
                <li key={item.id}
                  className={`${active === item.title ? 'text-white' : 'text-gray-400'} cursor-pointer transition duration-300 ease-in-out hover:text-lime-400`}
                // Marca el enlace como activo
                >
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    offset={100} // Ajusta según tu layout
                    duration={500}
                    onClick={() => {setActive(item.title); setToggle(false);}}

                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};