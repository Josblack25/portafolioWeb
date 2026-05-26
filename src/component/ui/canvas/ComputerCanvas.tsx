"use client";

import { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../loader/Loader';
import Computers from "./mascaraComputer/computerCanvas";

const ComputerCanvas = () => {

    // para manejar el responsive 
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // comprobacion dispositivo mobile
        const mediaQuery = window.matchMedia(('max-width: 500px'));

        setIsMobile(mediaQuery.matches);

        // actualiza estado  mediaQuery
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }

    }, [])

    return (

        <div className='w-full h-full'>
            <Canvas
                frameloop='demand'
                shadows
                camera={{ position: [20, 3, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >

                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}

                    />
                    <Computers isMobile={isMobile} />

                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default ComputerCanvas;
