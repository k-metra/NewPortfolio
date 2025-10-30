import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import Header from '../components/header';
import { useTranslation } from 'react-i18next';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Home from '../pages/Home';

export default function LanguageWrapper() {
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();
    const location = useLocation();

    // Define supported languages
    const supportedLanguages = ['tl', 'fr', 'es', 'de', 'en']; // Add more as needed
    
    // Determine if we have a valid language parameter
    const isValidLanguage = lang && supportedLanguages.includes(lang);

    
    
    // Default to English if no valid language parameter
    const currentLanguage = isValidLanguage ? lang : 'en';

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    if (!isValidLanguage) return <Navigate to={`/en${location.pathname}`} replace />;

    return (
        <>
            <div className="w-full min-h-screen bg-background overflow-x-hidden">
            <Header />
            
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            </div>
        </>
    )

}