import Experience from "../components/experience";
import Footer from "../components/footer";
import HeroCard from "../components/heroCard";
import TechStack from "../components/techStack";

export default function Home() {
    return (
        <main className="w-full min-h-screen flex flex-col items-center pt-20 bg-background px-4 overflow-x-hidden">
            <HeroCard />
            <TechStack />
            <Experience />
            <Footer/>
        </main>
    )
}