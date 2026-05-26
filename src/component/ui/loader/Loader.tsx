"use client";

import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {

    // useProgress devuelve el porcentaje de carga del modelo 3D
    const { progress } = useProgress();

    return (
        <Html
            as="div"
            center
            className="flex justify-center items-center flex-col"
        >
            {/* Spinner */}
            <span className='mr-3 size-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_15s_liner_infite'></span>

            {/* Texto del loader */}
            <p className='text-sm text-foreground font-weight-[800] font-semibold mt-2'>
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default CanvasLoader;