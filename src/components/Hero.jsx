
import ComputersCanvas from '../components/canvas/ComputersCanvas';
import StarCanvas from '../components/canvas/StarCanvas'

import { styles } from '../styles';

export default function Hero() {

    return (
        <>
            <StarCanvas />

            <section className='relative w-full h-screen m-5 mx-auto top-[-16px] flex items-center flex-center'>

                <div className={`${styles.paddinX} absolute inset-1 top-[80px] w-100% flex flex-row items-start gap-5`}>

                    <div className='flex flex-col justify-center items-center mt-5  '>

                        <div className=' w-5 h-5 rounded-full bg-secundario border-1' />
                        <div className=' w-1 sm:h-70 h-40 violet-gradient ' />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} type text-cuarto`}> Hola, soy <span className='text-secundario'>Adonis </span> </h1>
                        <p className={` ${styles.heroSubText} mt-2 text-white-100`}> Desarollador web <br className='sm:block hidden' /> Frontend y Backend</p>

                    </div>

                </div>
                <div className=" w-screen sm:h-[700px] inset-0 flex justify-center items-center z-0">
                    <ComputersCanvas />
                </div>

            </section>
        </>

    )
}