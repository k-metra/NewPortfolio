import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ExperienceCard from "./experienceCard";

import codex2025 from '../assets/experience_bg1.jpg';
import petmedics from '../assets/experience_bg2.png';
import umak2025 from '../assets/experience_bg3.png';
import mcjparish from '../assets/experience_bg4.png';

export default function Experience() {
    const { t } = useTranslation();
    return (
        <motion.div
            className="w-full min-h-screen flex flex-col items-center pt-20 pb-10 bg-background px-4 overflow-x-hidden font-jetbrains text-text-primary"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4">{t("experience.title")}</h1>
            <div className="flex flex-col gap-3 md:max-w-[90%] max-w-[95%]">
                <ExperienceCard title="Mapua MCL-ACM CodeX 2025" description="Participated in the Mapua MCL-ACM CodeX 2025 Programming Competition and secured first place." when="March 2025" imageUrl={codex2025} href="https://www.facebook.com/mapuamclacm/posts/pfbid02JYWcaeQZ6EvLE6JMqUXP1bSgSsBHMXu11YXoUuV5FAoEpb7jDKK2tvSZPfhrGuy2l"/>
                <ExperienceCard
                    title="14th IT Skills Olympic - University of Makati"
                    description="Participated in the 14th IT Skills Olympic at the University of Makati."
                    imageUrl={umak2025}
                    when="November 2025"
                    href="https://www.facebook.com/share/p/1HaRJUhq2H/"
                />
                <ExperienceCard 
                    title="PetMedics - Veterinary Clinic Marketing Page" 
                    description="Developed a sample marketing website with admin panel, role-based access, backend mail integration, and appointment scheduling system for a veterinary clinic using React, Laravel, and SQLite."
                    imageUrl={petmedics}
                    when="September 2025 - October 2025"
                    href="https://petcare.my.to"
                />
                <ExperienceCard
                    title="Mary Cause of Our Joy Parish - Website Application"
                    description="Built a website application for Mary Cause of Our Joy Parish featuring events and an intuitive admin dashboard for streamlining customer records and policy holders using React, Django, and MySQL."
                    imageUrl={mcjparish}
                    when="October 2025"
                    href="https://mcj-parish.hopto.org"
                />
            </div>
        </motion.div>
    )
}