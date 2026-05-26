"use client"
export default function Education() {
    return (
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full" id="education">
            <h2 className="text-4xl md:text-5xl text-primary font-bold mb-16 fade-up-element text-center md:text-left">
                Mis Estudios
            </h2>

            {/* Contenedor de la línea de tiempo */}
            <div className="ml-4 md:ml-12 border-l-2 border-primary/30 relative space-y-12">

                {/* Item 1: Educación Formal */}
                <div className="relative pl-8 md:pl-12 fade-up-element">
                    {/* Punto indicador en la línea */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#00d4ff]"></div>

                    {/* Tarjeta Glassmorphism usando tus colores nativos */}
                    <div className="bg-surface/40 backdrop-blur-md border border-surface-bright p-6 rounded-2xl md:w-2/3 shadow-lg hover:border-primary/50 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                            <h3 className="text-on-surface font-semibold text-xl md:text-2xl">
                                Estudiante Universitario
                            </h3>
                            <span className="text-neutral bg-primary px-4 py-1 rounded-full text-sm font-bold inline-block w-max shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                                Actualidad
                            </span>
                        </div>
                        <h4 className="text-tertiary font-medium mb-4 text-lg">
                            Instituto Universitario Jesús Obrero (IUJO)
                        </h4>
                        <p className="text-on-surface/80 text-sm md:text-base leading-relaxed">
                            Formación académica superior en Barquisimeto, desarrollando bases sólidas en lógica, tecnología y resolución de problemas para aplicarlos en el ecosistema digital y de software.
                        </p>
                    </div>
                </div>

                {/* Item 2: Especialización Técnica / Full-Stack */}
                <div className="relative pl-8 md:pl-12 fade-up-element">
                    {/* Punto indicador en la línea */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-surface-bright border-2 border-primary rounded-full"></div>

                    <div className="bg-surface/40 backdrop-blur-md border border-surface-bright p-6 rounded-2xl md:w-2/3 shadow-lg hover:border-primary/50 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                            <h3 className="text-on-surface font-semibold text-xl md:text-2xl">
                                Desarrollo Web Full-Stack
                            </h3>
                            <span className="text-tertiary bg-surface-bright px-4 py-1 rounded-full text-sm font-medium border border-tertiary/20 inline-block w-max">
                                Aprendizaje Continuo
                            </span>
                        </div>
                        <h4 className="text-tertiary font-medium mb-4 text-lg">
                            Especialización Autodidacta
                        </h4>
                        <p className="text-on-surface/80 text-sm md:text-base leading-relaxed">
                            Transición y especialización profunda en desarrollo backend y frontend. Dominio práctico de arquitecturas modernas construyendo soluciones reales con Next.js, React, TypeScript, Python (FastAPI) y flujos de automatización con n8n.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}