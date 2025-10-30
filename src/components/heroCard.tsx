import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { FaGithub, FaFacebook } from "react-icons/fa";


export default function HeroCard() {
    const { t } = useTranslation();

    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-border mt-8 rounded-lg text-text-primary font-jetbrains border p-8 drop-shadow-md max-w-[50rem]"
        >
            <div className="flex flex-row w-full justify-between md:gap-60 mx-auto">
                <h2 className="text-left text-3xl font-semibold">
                Kurt Metra
                </h2>

                <div className="flex flex-row gap-2 items-center">
                    <button className="p-2 border border-border rounded-lg hover:bg-white hover:text-background transition-colors duration-300 ease-in-out cursor-pointer">
                        <FaGithub size={24} />
                    </button>
                    <button className="p-2 border border-border rounded-lg hover:bg-white hover:text-background transition-colors duration-300 ease-in-out cursor-pointer">
                        <FaFacebook size={24} />
                    </button>
                </div>
            </div>
            <div className="flex justify-start items-center text-text-muted mt-0">
                <p className="text-left font-normal">Full-Stack Developer</p>
            </div>
            <div className="mb-0 mt-4">
                <p className="text-justify">
                {t('hero.body')}
                </p>
            </div>
            
        </motion.div>
    )
}