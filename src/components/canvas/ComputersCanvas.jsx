import React, {Suspense, useState, useEffect} from 'react'; 

import { Canvas, events } from '@react-three/fiber';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'


const Computers = (isMobile) => {
  
  //importamos nuetro modelo 3D gltf
  const computer = useGLTF('./desktop_pc/scene.gltf');

    
    /*creamos un punto de luz */
    /* renderizamos nuestro objeto 3d con scene */

  
  return ( 
    // renderizamos el mesh, sera nuestra ventana de visualizacion
    <mesh>
      {/* agregamos nuestro foco de luz pra vizualizar el contenido*/}
      <ambientLight intensity={1}/>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.15} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      {/* renderizamos el objeto, ajustamos escala y la posicion en matriz[z,y,x], agregamos rotacion e inclinacion*/}
      <primitive object={computer.scene}
        scale={isMobile ? 0.75 : 0.55}
        position={isMobile ? [0, -2.2, -2.2] : [-1, -2.5, -3.30]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>

  )
};


// creamos nuestro lienzo donde vamos a renderizar nuestro modelo 3D y estableer luz y controles 


   /* establecemos el suspenso para integrar nuestro cargador. directo de react  */
   /* control de movimiento orbitcontrol */

export default function ComputersCanvas () {

  const [isMobile, setisMobile] = useState(false)

  useEffect(() => {
    //comprobamos que estamos en dispositivo movil
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    //si coincide estamos en dispositivo mobile
    setisMobile(mediaQuery.matches);
    // consulta de cambio de media query
    const handleMediaQueryChange =(event) =>
      setisMobile(event.matches);
    //consulta de eventos 
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //cambiamos de evento al salir de mobile 
    return ()=>
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }, [])
  

  return (

    //renderizamos neustro liezo con canvvas
    <Canvas 
      /* vamos establer los frame ne bucle de acuerdo a la demanda */
      frameloop='demand'
      /* agregamos sombreas*/
      shadows
      /* definimos nuestra camara, quien nos va mostrar nuetro modelo 3d - fov es nuestro campo de vision */
      camera={{position:[20,3,5], fov: 25}}
      /* propiedad para presentrar el modelo 3d */
      gl={{preserveDrawingBuffer: true}}
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

  )
}