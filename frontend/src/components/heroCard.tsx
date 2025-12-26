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
        className="border-border mt-8 rounded-lg text-text-primary font-jetbrains border p-4 sm:p-6 md:p-8 drop-shadow-md w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4"
        >
            <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                <div className="flex-1 min-w-0">
                    <h2 className="text-left text-xl sm:text-2xl md:text-3xl font-semibold break-words">
                        Kurt Metra
                    </h2>
                    <div className="flex justify-start items-center text-text-muted mt-1 sm:mt-0">
                        <p className="text-left font-normal text-sm sm:text-base">Full-Stack Developer</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center flex-shrink-0">
                    <a href='https://ko-fi.com/S6S11NOJWU' target='_blank'><img height='36' className="border-none h-[36px]" src='https://storage.ko-fi.com/cdn/kofi6.png?v=6'  alt='Buy Me a Coffee at ko-fi.com' /></a>
                    <button 
                        onClick={() => window.open("https://github.com/k-metra/", "_blank")} 
                        className="p-2 border border-border rounded-lg hover:bg-white hover:text-background flex justify-center items-center transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                        <FaGithub size={20} />
                    </button>
                    <button 
                        onClick={() => window.open("https://www.facebook.com/m.trakurt", "_blank")} 
                        className="p-2 border border-border rounded-lg hover:bg-white flex justify-center items-centerw hover:text-background transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                        <FaFacebook size={20} />
                    </button>
                </div>
            </div>
            
            <div className="mt-4">
                <p className="text-justify text-sm sm:text-base leading-relaxed">
                {t('hero.body')}
                </p>
            </div>
            
        </motion.div>
    )
}