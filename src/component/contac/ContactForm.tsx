'use client';

export default function ContactForm() {
    return (
        // Se añade px-4 sm:px-0 para evitar que pegue de los bordes en pantallas muy pequeñas
        <div className="w-full max-w-md mx-auto lg:mx-0 flex flex-col gap-5 md:gap-6 px-4 sm:px-0">

            {/* Centrado en móvil (text-center), alineado a la izquierda en escritorio (lg:text-left) */}
            <div className="space-y-2 text-center lg:text-left">
                {/* Fuente adaptable: 2xl en móvil, 3xl en PC */}
                <h3 className="text-2xl md:text-3xl font-bold text-primary">Hablemos</h3>
                <p className="text-on-surface text-sm md:text-base leading-relaxed">
                    ¿Buscas automatizar procesos, integrar IA o desarrollar una web a medida? Envíame un mensaje y coordinemos.
                </p>
                {/* Centrado del ícono en móvil, a la izquierda en PC */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-tertiary text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    <span>Barquisimeto, Venezuela</span>
                </div>
            </div>

            <form className="flex flex-col gap-4 mt-2 md:mt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs md:text-sm font-medium text-tertiary ml-1">Nombre</label>
                    <input
                        type="text"
                        placeholder="Tu nombre o empresa"
                        // Padding adaptativo para mejor tacto en móvil
                        className="p-3.5 md:p-3 rounded-lg bg-surface-bright text-on-surface border border-transparent focus:border-primary focus:outline-none transition-colors text-sm md:text-base w-full"
                    />
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs md:text-sm font-medium text-tertiary ml-1">Correo Electrónico</label>
                    <input
                        type="email"
                        placeholder="correo@ejemplo.com"
                        className="p-3.5 md:p-3 rounded-lg bg-surface-bright text-on-surface border border-transparent focus:border-primary focus:outline-none transition-colors text-sm md:text-base w-full"
                    />
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs md:text-sm font-medium text-tertiary ml-1">Mensaje</label>
                    <textarea
                        rows={4}
                        placeholder="Detalla tu proyecto o necesidad..."
                        className="p-3.5 md:p-3 rounded-lg bg-surface-bright text-on-surface border border-transparent focus:border-primary focus:outline-none transition-colors resize-none text-sm md:text-base w-full"
                    />
                </div>

                <button
                    type="submit"
                    // Botón que ocupa el 100% (w-full) siempre, ideal para tocar en móvil
                    className="mt-2 w-full bg-primary text-neutral font-bold py-3.5 md:py-3 px-6 rounded-lg hover:bg-tertiary transition-colors shadow-[0_0_15px_rgba(0,212,255,0.4)] text-sm md:text-base"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
}