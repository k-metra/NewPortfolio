import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from "react-router-dom";

export default function Header() {
    const { t, i18n } = useTranslation();
    const { lang } = useParams();
    const location = useLocation();


    const toggleLanguage = () => {
        const currentLang = i18n.language;
        const newLang = currentLang === 'en' ? 'tl' : 'en';

        // Build the new URL
        const newPath =
            newLang === 'tl'
            ? `/tl${location.pathname}`
            : location.pathname.replace(/^\/tl/, '') || '/';
        
        window.location.href = newPath;
    }

    const base = lang === 'tl' ? '/tl' : '';

    return (
        <header className="font-jetbrains w-screen md:min-h-16 absolute bg-background text-text-primary flex items-center justify-between md:px-60">
            <motion.h1 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover = {{
                scale: 1.05,
                transition: {
                    duration: 0.2,
                    ease: "easeOut",
                }
            }}
            className="text-2xl font-bold cursor-pointer">
                <Link to={`${base}/`}>Kurt Metra</Link>
            </motion.h1>

            <motion.div 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row space-x-6 gap-5 [&>*]:transition-colors [&>*]:duration-200 [&>*]:ease-in-out">
                <Link to={`${base}/about`} className="hover:text-text-muted">{t('header.about')}</Link>
                <Link to={`${base}/projects`} className="hover:text-text-muted">{t('header.projects')}</Link>
                <Link to={`${base}/contact`} className="hover:text-text-muted">{t('header.contact')}</Link>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="px-6 border-text-primary border-2 py-1 hover:bg-white transition-colors transition-350 ease-in-out hover:text-background rounded-full cursor-pointer"
                onClick={toggleLanguage}
            >
                {t('header.language')}
            </motion.button>
        </header>
    )
}