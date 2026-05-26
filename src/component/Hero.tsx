'use client';

import ComputerCanvas from './ui/canvas/ComputerCanvas';
import StarCanvas from './ui/canvas/start/StarCanvas';

export default function Hero() {
    return (
        <>
            {/* Fondo de Estrellas fijo */}
            <StarCanvas />
            <section className=" relative w-full min-h-screen px-5 py-10 sm:px-12 lg:px-16 xl:px-50 flex flex-col lg:py-0">

                {/* COLUMNA IZQUIERDA: Texto y Botones */}
                <div className=" xl:ml-[-150px] relative z-10 xl:w-7xl w-full flex flex-col justify-center text-center lg:text-left  lg:mt-30">

                    <h1 className=" font-black text-primary text-[2rem] sm:text-[2.5rem] xl:text-6xl leading-tight">
                        Adonis Dev | <span className="text-primary-container block sm:inline">Full-Stack Developer</span>
                    </h1>

                    <p className="mt-4 text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem] text-on-surface max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        De la lógica del servidor a la interactividad en pantalla.
                        <br className="hidden sm:inline" />
                        Desarrollo sistemas eficientes y experiencias web inmersivas.
                    </p>

                    {/* Botones */}
                    <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                        <button className="cursor-pointer bg-primary text-neutral font-bold py-3.5 md:py-3 px-6 rounded-lg hover:bg-tertiary transition-colors shadow-[0_0_15px_rgba(0,212,255,0.4)] text-sm md:text-base">
                            <a href="#projects">Ver Proyectos</a>
                        </button>
                        <button className="cursor-pointer bg-primary text-neutral font-bold py-3.5 md:py-3 px-6 rounded-lg hover:bg-tertiary transition-colors shadow-[0_0_15px_rgba(0,212,255,0.4)] text-sm md:text-base">
                            <a href="#">CV</a>
                        </button>
                    </div>
                </div>

                {/* COLUMNA DERECHA: Canvas de la PC (Mediano en Escritorio) */}
                <div className="relative z-10 w-full h-[35vh] sm:h-[45vh] lg:h-[55vh] xl:h-[60vh] flex items-center justify-center">
                    <ComputerCanvas />
                </div>
            </section>
        </>
    );
}