
import ComputersCanvas from '../components/canvas/ComputersCanvas';

import {styles} from '../styles';

const Hero = () => {

    return (
        <>
        <section className={`relative w-full h-screen mx-auto bg-center mt-12`}>
            <div className={`${styles.paddinX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className=' w-5 h-5 rounded-full bg-primary ' />
                    <div className=' w-1 sm:h-70 h-40 green-gradient '/>
                </div>

                <div> 
                    <h1 className={`${styles.heroHeadText} type`}>Hi, I am <span className='text-primary'>Adonis </span> </h1>
                    <p className={` ${styles.heroSubText} mt-2 text-white-100`}> Desarollador web <br className='sm:block hidden'/> Frontend y Backend</p>

                </div>

            </div>
        
            <ComputersCanvas />

        </section>
        </>

    )
}


export default Hero;