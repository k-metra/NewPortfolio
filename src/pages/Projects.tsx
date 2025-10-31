import { Helmet } from "react-helmet-async";

export default function Projects() {
    return (
        <main className="w-full min-h-screen flex flex-col items-center pt-20 pb-10 bg-background px-4 overflow-x-hidden">
            <Helmet>
                <title>Kurt Metra - My Projects</title>
                <meta name="description" content="Explore the projects developed by Kurt Metra, a Full-Stack Developer." />
                <link rel="canonical" href="https://www.kurtmetra.dev/en/projects" />
                <link rel="alternate" hrefLang="en" href="https://www.kurtmetra.dev/en/projects" />
                <link rel="alternate" hrefLang="tl" href="https://www.kurtmetra.dev/tl/projects" />
            </Helmet>
            <div className="w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary font-jetbrains">Projects</h1>
                <p className="text-text-primary mt-4">Coming soon...</p>
            </div>
        </main>
    )
}