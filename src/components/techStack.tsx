import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { frontend, backend, languages } from "../config/techStack";
import Marquee from "react-fast-marquee";

export default function TechStack() {
    const { t } = useTranslation();
    const [iconSize, setIconSize] = useState(35);

    useEffect(() => {
        const updateIconSize = () => {
            if (window.innerWidth < 640) {
                setIconSize(24);
            } else if (window.innerWidth < 768) {
                setIconSize(28);
            } else {
                setIconSize(35);
            }
        };

        updateIconSize();
        window.addEventListener('resize', updateIconSize);
        return () => window.removeEventListener('resize', updateIconSize);
    }, []);

    return (
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-8 w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4 [&>p]:text-text-primary [&>p]:font-jetbrains [&>p]:text-justify [&>p]:my-4 [&>p]:leading-relaxed">
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2 text-left font-bold text-text-primary font-jetbrains">{t('work')}</h1>

            <h3 className="text-text-primary my-4 text-center font-jetbrains tracking-[0.1rem] sm:tracking-[0.25rem] text-sm sm:text-base">FRONTEND</h3>
            <hr className="border-t border-border w-[80%] mt-3 mb-6 flex mx-auto"/>

            <Marquee 
                pauseOnHover={true} 
                speed={30} 
                gradient={true} 
                gradientWidth={50} 
                gradientColor={"#0d0d0d"}
            >
                <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 overflow-hidden flex-nowrap cursor-pointer items-center justify-center">
                    {
                        Object.entries(
                            frontend as Record<string, { icon: React.ReactElement }>
                        ).map(([name, { icon }]) => (
                            <div key={name} className="my-2 flex flex-row items-center text-text-primary font-semibold justify-center gap-2 sm:gap-3 md:gap-4 mx-4 whitespace-nowrap">
                                <div className="flex-shrink-0">
                                    {React.cloneElement(icon, { size: iconSize } as any)}
                                </div>
                                <p className="text-sm sm:text-lg md:text-xl font-jetbrains">{name}</p>
                            </div>
                        ))
                    }
                </div>
            </Marquee>

            <h3 className="text-text-primary my-4 text-center font-jetbrains tracking-[0.1rem] sm:tracking-[0.25rem] text-sm sm:text-base">BACKEND</h3>
            <hr className="border-t border-border w-[80%] mt-3 mb-6 flex mx-auto"/>
            
            <Marquee 
                pauseOnHover={true} 
                speed={25} 
                gradient={true} 
                direction={"right"} 
                gradientWidth={50} 
                gradientColor={"#0d0d0d"}
            >
                <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 flex-nowrap overflow-hidden items-center cursor-pointer justify-around">
                    {
                        Object.entries(
                            backend as Record<string, { icon: React.ReactElement }>
                        ).map(([name, { icon }]) => (
                            <div key={name} className="my-2 flex flex-shrink-0 flex-row items-center font-jetbrains text-text-primary font-semibold justify-center gap-2 sm:gap-3 md:gap-4 mx-4 whitespace-nowrap">
                                <div className="flex-shrink-0">
                                    {React.cloneElement(icon, { size: iconSize } as any)}
                                </div>
                                <p className="text-sm sm:text-lg md:text-xl">{name}</p>
                            </div>
                        ))
                    }
                </div>
            </Marquee>

            <h3 className="text-text-primary my-4 text-center font-jetbrains tracking-[0.1rem] sm:tracking-[0.25rem] text-sm sm:text-base">LANGUAGES</h3>
            <hr className="border-t border-border w-[80%] mt-3 mb-6 flex mx-auto"/>
            
            <Marquee 
                pauseOnHover={true} 
                speed={35} 
                gradient={true} 
                gradientWidth={50} 
                gradientColor={"#0d0d0d"}
            >
                <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 overflow-hidden flex-nowrap cursor-pointer items-center justify-center">
                    {
                        Object.entries(
                            languages as Record<string, { icon: React.ReactElement }>
                        ).map(([name, { icon }]) => (
                            <div key={name} className="my-2 flex flex-row items-center text-text-primary font-semibold justify-center gap-2 sm:gap-3 md:gap-4 mx-4 whitespace-nowrap">
                                <div className="flex-shrink-0">
                                    {React.cloneElement(icon, { size: iconSize } as any)}
                                </div>
                                <p className="text-sm sm:text-lg md:text-xl font-jetbrains">{name}</p>
                            </div>
                        ))
                    }
                </div>
            </Marquee>

            {/*
            <h2 className="text-2xl mt-4 mb-2 text-left font-semibold text-text-primary font-jetbrains">Frontend</h2>
            <p>
                <ReactMarkdown>
                    {t('techStack.frontend.p1')}
                </ReactMarkdown>
            </p>
            <p>
                <ReactMarkdown>
                    {t('techStack.frontend.p2')}
                </ReactMarkdown>
            </p>
            <h2 className="text-2xl mt-4 mb-2 text-left font-semibold text-text-primary font-jetbrains">Backend</h2>
            <p>
                <ReactMarkdown>
                    {t('techStack.backend.p1')}
                </ReactMarkdown>
            </p>
            <p>
                <ReactMarkdown>
                    {t('techStack.backend.p2')}
                </ReactMarkdown>
            </p>
            <h2 className="text-2xl mt-4 mb-2 text-left font-semibold text-text-primary font-jetbrains">Languages</h2>
            <p>
                <ReactMarkdown>
                    {t('techStack.languages.p1')}
                </ReactMarkdown>
            </p>
            <p>
                <ReactMarkdown>
                    {t('techStack.languages.p2')}
                </ReactMarkdown>
            </p>
            <p>
                <ReactMarkdown>
                    {t('techStack.languages.p3')}
                </ReactMarkdown>
            </p>*/}

        </motion.div>
    )
}