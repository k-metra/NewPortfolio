import Experience from "../components/experience";
import Footer from "../components/footer";
import HeroCard from "../components/heroCard";
import Kofi from "../components/kofi";
import TechStack from "../components/techStack";

import { Helmet } from 'react-helmet-async'

export default function Home() {
    return (
        <>
        <Helmet>
                <title>Kurt Metra - Full-Stack Developer</title>
                <meta name="description" content="Kurt Metra - Full-Stack Developer Portfolio. Your solution to IT & capstone projects." />
                <link rel="canonical" href="https://www.kurtmetra.dev/en/" />
                <link rel="alternate" hrefLang="en" href="https://www.kurtmetra.dev/en/" />
                <link rel="alternate" hrefLang="tl" href="https://www.kurtmetra.dev/tl/" />
                <meta property="og:title" content="Kurt Metra - Full-Stack Developer" />
                <meta property="og:description" content="Kurt Metra - Full-Stack Developer Portfolio. Your solution to IT & capstone projects." />
                <meta property="og:url" content="https://www.kurtmetra.dev/en/" />
                <meta property="og:type" content="website" />
            </Helmet>
        <main className="w-full min-h-screen flex flex-col items-center pt-20 bg-background px-4 overflow-x-hidden">
            
            <HeroCard />
            <TechStack />
            <Experience />
            <Kofi />
            <Footer/>
        </main>
        </>
    )
}