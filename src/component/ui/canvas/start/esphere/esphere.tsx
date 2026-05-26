"use client"

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from "maath/random/dist/maath-random.esm";

// props

interface IStar {

}

// Forzamos un contenedor genérico para saltarnos la estricta validación JSX de React 19
const Group = 'group' as any;


const Stars = (props: any) => {
    const ref = useRef<THREE.Points>(null);

    const [sphere] = useState<Float32Array>(() =>
        random.inSphere(new Float32Array(10000), { radius: 0.9 })
    );

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30;
            ref.current.rotation.y -= delta / 50;
        }
        ``
    });

    return (

        <Group rotation={[5, 3, Math.PI / 5]}>
            <Points ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="yellow"
                    size={0.0028}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </Group>

    );

}

export default Stars;