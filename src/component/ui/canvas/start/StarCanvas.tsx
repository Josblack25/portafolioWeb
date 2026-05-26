"use client"
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Stars from './esphere/esphere';

// props

interface IStar {

}

const StarCanvas = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarCanvas;