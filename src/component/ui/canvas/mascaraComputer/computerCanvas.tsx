"use client"

import React from 'react';
import { useGLTF } from '@react-three/drei';

// propiedades de computers

interface computerProps {
    isMobile: boolean;
}

// componente computer
const Computers: React.FC<computerProps> = ({ isMobile }) => {

    // importar modelo 3d gltf
    const computer = useGLTF('/desktop_pc/scene.gltf');

    // Forzamos un contenedor genérico para saltarnos la estricta validación JSX de React 19
    const CanvasMesh = 'mesh' as any;
    const AmbientLightElement = 'ambientLight' as any;
    const HemisphereLightElement = 'hemisphereLight' as any;
    const PointLightElement = 'pointLight' as any;
    const SpotLightElement = 'spotLight' as any;
    const PrimitiveElement = 'primitive' as any;

    return (

        <CanvasMesh>
            <AmbientLightElement intensity={1} />
            <HemisphereLightElement intensity={0.5} groundColor="black" />
            <PointLightElement intensity={1} />
            <SpotLightElement
                pposition={[-20, 50, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <PrimitiveElement
                object={computer.scene}
                scale={isMobile ? 1 : 0.75}
                position={isMobile ? [0, -3.2, -2.2] : [1, -2.5, -3.30]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </CanvasMesh>
    );
};

export default Computers;