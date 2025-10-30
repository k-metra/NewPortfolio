import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const { t, i18n } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Define supported languages
    const supportedLanguages = ['tl', 'fr', 'es', 'de', 'en']; // Add more as needed
    
    // Determine if we have a valid language parameter
    const isValidLanguage = lang && supportedLanguages.includes(lang);
    
    // Current language (default to English if no valid language parameter)
    const currentLanguage = isValidLanguage ? lang : 'en';
    
    // Check if we're not on the default English route
    const hasLanguagePrefix = isValidLanguage;

    const toggleLanguage = () => {
        const currentLang = i18n.language;
        const newLang = currentLang === 'en' ? 'tl' : 'en'; // Default toggle between English and Tagalog
        
        // Extract the path without language prefix
        let currentPath;
        if (hasLanguagePrefix && lang) {
            // Remove /{lang} prefix for non-English URLs
            currentPath = location.pathname.substring(lang.length + 1) || '/';
        } else {
            // English URLs don't have prefix
            currentPath = location.pathname;
        }

        // Build the new URL
        const newPath = newLang === 'en' ? currentPath : `/${newLang}${currentPath}`;
        
        window.location.href = newPath;
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Always use the current language parameter if present, otherwise default to English
    const navPrefix = isValidLanguage ? `/${lang}` : '';

    return (
        <>
            <header className="font-jetbrains w-full min-h-16 fixed top-0 left-0 right-0 z-50 bg-background text-text-primary flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 border-b border-border/20">
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
                className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer z-60">
                    <Link to={`${navPrefix}/`}>Kurt Metra</Link>
                </motion.h1>

                {/* Desktop Navigation */}
                <motion.div 
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex flex-row items-center space-x-6 [&>*]:transition-colors [&>*]:duration-200 [&>*]:ease-in-out">
                    <Link to={`${navPrefix}/about`} className="hover:text-text-muted text-sm lg:text-base">{t('header.about')}</Link>
                    <Link to={`${navPrefix}/projects`} className="hover:text-text-muted text-sm lg:text-base">{t('header.projects')}</Link>
                    <Link to={`${navPrefix}/contact`} className="hover:text-text-muted text-sm lg:text-base">{t('header.contact')}</Link>
                </motion.div>

                <div className="flex items-center gap-4">
                    <motion.button
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="px-3 sm:px-4 md:px-6 border-text-primary border py-1 hover:bg-white transition-colors duration-300 ease-in-out hover:text-background rounded-full cursor-pointer text-xs sm:text-sm"
                        onClick={toggleLanguage}
                    >
                        {t('header.language')}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-60"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <motion.span
                            animate={{
                                rotate: isMobileMenuOpen ? 45 : 0,
                                y: isMobileMenuOpen ? 6 : 0,
                            }}
                            className="w-6 h-0.5 bg-text-primary transition-all duration-300 absolute"
                        />
                        <motion.span
                            animate={{
                                opacity: isMobileMenuOpen ? 0 : 1,
                            }}
                            className="w-6 h-0.5 bg-text-primary transition-all duration-300 absolute"
                        />
                        <motion.span
                            animate={{
                                rotate: isMobileMenuOpen ? -45 : 0,
                                y: isMobileMenuOpen ? -6 : 0,
                            }}
                            className="w-6 h-0.5 bg-text-primary transition-all duration-300 absolute"
                        />
                    </motion.button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden"
                        onClick={closeMobileMenu}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="absolute right-0 top-0 h-full w-64 bg-background border-l border-border shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col pt-20 px-6 space-y-6">
                                <Link 
                                    to={`${navPrefix}/about`} 
                                    className="text-text-primary hover:text-primary transition-colors duration-200 text-lg font-medium"
                                    onClick={closeMobileMenu}
                                >
                                    {t('header.about')}
                                </Link>
                                <Link 
                                    to={`${navPrefix}/projects`} 
                                    className="text-text-primary hover:text-primary transition-colors duration-200 text-lg font-medium"
                                    onClick={closeMobileMenu}
                                >
                                    {t('header.projects')}
                                </Link>
                                <Link 
                                    to={`${navPrefix}/contact`} 
                                    className="text-text-primary hover:text-primary transition-colors duration-200 text-lg font-medium"
                                    onClick={closeMobileMenu}
                                >
                                    {t('header.contact')}
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}