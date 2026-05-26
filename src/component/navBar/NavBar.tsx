'use client';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Escucha el cambio del scroll
    useMotionValueEvent(scrollY, "change", (latest) => {
        // Si el usuario baja más de 100px, mostramos el Nav
        if (latest > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Estudios', href: '#education' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <motion.div
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{
                duration: 0.4,
                ease: [0.25, 0.8, 0.25, 1] // Curva suave idéntica a tus tarjetas 3D
            }}
        >
            <nav className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-surface/70 backdrop-blur-lg border border-surface-bright rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        // Estilos del botón: texto claro, hover con tu color primary
                        className="px-4 py-2 text-sm sm:text-base font-medium text-on-surface hover:text-primary hover:bg-primary/10 rounded-full transition-colors duration-300"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}