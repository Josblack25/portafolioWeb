"use client"
import ThreeSphere from './ui/esphere/ThreeSphere';
import ContactForm from './contac/ContactForm';

export default function Contact() {
    return (
        <section id="contact" className="py-20 w-full min-h-screen bg-background relative overflow-hidden flex items-center justify-center">

            {/* Opcional: Un pequeño brillo en el fondo usando tus colores */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                {/* Lado Izquierdo: Formulario */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 lg:mr-20 mb-20">
                    <ContactForm />
                </div>

                {/* Lado Derecho: Esfera 3D */}
                <div className="w-full lg:w-1/2 flex justify-center z-10">
                    <ThreeSphere />
                </div>

            </div>
        </section>
    );
}