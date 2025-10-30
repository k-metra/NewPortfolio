import { Routes, Route, Navigate, useParams } from 'react-router-dom';
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

    useEffect(() => {
        if (lang === 'tl') i18n.changeLanguage('tl');
        else i18n.changeLanguage('en');
    }, [lang, i18n]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )

}