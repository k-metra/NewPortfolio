import Experience from "../components/experience";
import Footer from "../components/footer";
import HeroCard from "../components/heroCard";
import TechStack from "../components/techStack";

import { Helmet } from 'react-helmet-async'

export default function Home() {
    return (
        <main className="w-full min-h-screen flex flex-col items-center pt-20 bg-background px-4 overflow-x-hidden">
            <Helmet>
                <title>Kurt Metra - Full-Stack Developer</title>
                <meta name="description" content="Kurt Metra - Full-Stack Developer Portfolio. Your solution to IT & capstone projects." />
                <link rel="canonical" href="https://www.kurtmetra.dev/en/" />
                <link rel="alternate" hrefLang="en" href="https://www.kurtmetra.dev/en/" />
                <link rel="alternate" hrefLang="tl" href="https://www.kurtmetra.dev/tl/" />
            </Helmet>
            <HeroCard />
            <TechStack />
            <Experience />
            <Footer/>
        </main>
    )
}