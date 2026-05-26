import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../../utils/motion';

interface TechCardProps {
    index: number;
    title: string;
    icon?: string;
}

const TechCard = ({ index, title, icon }: TechCardProps) => {
    return (
        <Tilt
            options={{ max: 45, scale: 1.1, speed: 450 }}
            className="w-full sm:w-[140px]" // Tamaño más compacto
        >
            <motion.div
                variants={fadeIn('up', 'spring', 0.1 * index, 0.75)}
                className="w-full p-[1px] rounded-[15px] bg-background from-primary to-primary-container shadow-card cursor-pointer"
            >
                <div className=" rounded-[10px] py-3 px-2 min-h-[5px] flex justify-evenly items-center flex-col border border-primary">
                    {/* Si no tienes íconos aún, puedes comentar la etiqueta img temporalmente 
                    <img
                        src={icon}
                        alt={title}
                        className="w-10 h-10 object-contain mb-2"
                    /> */}
                    <h3 className="text-primary text-[13px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default TechCard;