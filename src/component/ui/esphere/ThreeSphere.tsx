'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeSphere() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Asegurarnos de que el contenedor exista y el usuario permita animaciones
        if (!mountRef.current) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Configuración de la Escena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, 1, 0.5, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        // Ajustamos el tamaño al contenedor
        renderer.setSize(500, 500);
        mountRef.current.appendChild(renderer.domElement);

        // Geometría y Material
        const geometry = new THREE.SphereGeometry(15, 64, 64);
        const material = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        // Colores de la esfera
        const colors = [];
        const positionAttribute = geometry.attributes.position;

        for (let i = 0; i < positionAttribute.count; i++) {
            if (Math.random() > 0.5) {
                colors.push(0.66, 0.91, 1.0); // Light Cyan
            } else {
                colors.push(0.0, 0.83, 1.0); // Azure Blue (Tu --primary)
            }
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const sphere = new THREE.Points(geometry, material);
        scene.add(sphere);
        camera.position.z = 30;

        let animationFrameId: number;

        // Bucle de Animación
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        // Limpieza (Evita duplicados de canvas o fugas de memoria en React)
        return () => {
            cancelAnimationFrame(animationFrameId);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="flex justify-center items-center w-full max-w-[400px] h-[400px] mx-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
        />
    );
}