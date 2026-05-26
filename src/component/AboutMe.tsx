"use client";
import TechCard from '../component/ui/techCard/TechCard';
import technologies from '../constants/technologies';

export default function AboutMe() {
    return (
        <section className="py-24 w-full  mx-auto px-6 lg:px-16" id="tech">

            {/* Contenedor Grid: 1 columna en móvil, 2 en pantallas grandes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Columna 1: Texto */}
                <div className="space-y-6 bg-surface-bright rounded-3xl p-6">
                    <h2 className="font-headline-lg text-4xl md:text-5xl text-primary font-bold">
                        Sobre Mí
                    </h2>

                    <div className="space-y-4 text-body-lg text-on-surface leading-relaxed">
                        <p>
                            Soy desarrollador Full-Stack enfocado en construir aplicaciones web modernas y automatizar procesos empresariales. Mi objetivo no es solo escribir código, sino diseñar soluciones que ahorren tiempo y optimicen la operación de un negocio.
                        </p>
                        <p>
                            En el frontend, creo interfaces rápidas e interactivas con Next.js, React y TypeScript. En el backend, aseguro la estabilidad y la lógica utilizando Python (FastAPI/Flask) y bases de datos SQL (como Supabase), potenciando todo con flujos de automatización inteligentes e integración de IA.
                        </p>
                        <p>
                            Busco aportar soluciones eficientes, código limpio y sistemas escalables que marquen la diferencia desde el primer día.
                        </p>
                    </div>
                </div>

                {/* Columna 2: Terminal */}
                <div className="terminal-snippet rounded-xl p-6 shadow-2xl relative overflow-hidden group bg-on-background border border-surface-variant" style={{ transitionDelay: "0.2s" }}>
                    {/* Barra superior de color */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>

                    {/* Botones de ventana */}
                    <div className="flex items-center gap-2 mb-4 text-surface-variant">
                        <div className="w-3 h-3 rounded-full bg-error"></div>
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>

                    {/* Línea de comandos */}
                    <div className="font-label-code opacity-80 mb-6 font-mono">
                        <span className="text-sm text-white">adonis@ubuntu-24.04:~$ ./tech_stack_analysis.sh</span>
                    </div>

                    {/* Chips de tecnologías */}
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                        {technologies.map((tech, index) => (
                            <TechCard
                                key={tech.title}
                                index={index}
                                title={tech.title}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}