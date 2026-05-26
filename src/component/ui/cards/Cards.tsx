import { useState } from 'react';
import Image from 'next/image';

interface CardsProps {
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


export default function Cards({ title, descriptionFront, descriptionBack, functionalityFront, functionalityBack, tagsFront, tagsBack, image, source_code_link }: CardsProps) {

    const [rotate, setRotate] = useState(false);

    return (
        <div className='mt-5 mb-5 bg-neutral rounded-3xl relative w-full max-w-[400px] lg:max-w-[450px] h-[635px] cursor-pointer group [perspective:1000px '
            onClick={() => setRotate(!rotate)}
        >

            <div className={`  rounded-3xl relative w-full h-full  shadow-[0_10px_30px_rgba(0,0,0,0.2)] [transform-style:preserve-3d] transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] ${rotate ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}`}>

                <div className='absolute, inset-0 w-full g-full bg-neutral rounded-3xl [backface-visibility:hidden] flex flex-col overflow-hidden  '>
                    <div className='relative w-full h-[260px]'>
                        <Image
                            src={image}
                            alt={title}
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-1 p-6 flex flex-col items-start ">
                        <h2 className="text-primary text-1xl font-bold mb-2">{title}</h2>
                        <div className="mb-4 h-[225px] ">

                            <p className="text-tertiary text-sm md:text-base mb-4 line-clamp-3">{descriptionFront}</p>

                            {functionalityFront.map((fun: any, idx) => (
                                <p key={`front-fun-${idx}`} className="text-tertiary text-sm mb-1">• {fun}</p>
                            ))}
                        </div>
                    </div>

                    {/* Contenedor de Tags (Fijado al fondo) */}
                    <div className="p-4 bg-secondary flex flex-wrap gap-2 items-center justify-center">
                        {tagsFront.map((tag: any, idx) => (
                            <span key={`front-tag-${idx}`} className="text-sm font-medium text-tertiary bg-white/20 px-3 py-1 rounded-full">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CARA TRASERA (Backend) */}
                <div className="absolute inset-0 w-full h-full bg-stone-800 rounded-3xl [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col">

                    {/* Botón de Enlace al Código */}
                    <div className="w-full flex justify-end mb-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Evita que la tarjeta gire al hacer clic en el enlace
                                window.open(source_code_link, '_blank');
                            }}
                            className="bg-stone-600 hover:bg-primary transition-colors w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                            aria-label="Ver código fuente"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col justify-start">
                        <h3 className="text-white font-bold text-2xl mb-4">{title} <span className="text-primary text-lg">(Backend)</span></h3>
                        <p className="text-amber-100 text-sm md:text-base leading-relaxed mb-6">{descriptionBack}</p>

                        <div className="mb-4">
                            {functionalityBack?.map((fun: any, idx) => (
                                <p key={`back-fun-${idx}`} className="text-amber-100/80 text-sm mb-1">• {fun}</p>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-stone-600">
                        {tagsBack.map((tag: any, idx) => (
                            <span key={`back-tag-${idx}`} className="text-xs font-semibold text-stone-900 bg-amber-400 px-3 py-1 rounded-full">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}