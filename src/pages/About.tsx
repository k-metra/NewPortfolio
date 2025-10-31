import { Helmet } from "react-helmet-async";
import VerticalTimeline from "../components/verticalTimeline";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

export default function About() {
    const { t } = useTranslation();

    const steps = [
        {
            label: 'Lua and Roblox Development',
            description: t('about.timeline.1'),
            date: '2020'
        },
        {
            label: 'Discord Bot Development',
            description: t('about.timeline.2'),
            date: '2021'
        },
        {
            label: 'Minecraft Plugin Development',
            description: t('about.timeline.3'),
            date: '2021'
        },
        {
            label: '3D Modeling with Blender',
            description: t('about.timeline.4'),
            date: '2022'
        },
        {
            label: 'Mapua MCL-ACM 2024 CodeX Programming Competition',
            description: t('about.timeline.5'),
            date: '2024'
        },
        {
            label: 'Web Development Journey',
            description: t('about.timeline.6'),
            date: '2024 - Present',
        },
        {
            label: "Mapua MCL-ACM 2025 CodeX Programming Competition",
            description: t('about.timeline.7'),
            date: '2025',
        },
        {
            label: "Ongoing Learning and Development",
            description: t('about.timeline.8'),
            date: '2025 - Present',
            active: true
        }
    ]
    return (
        <>
        <Helmet>
                <title>Kurt Metra - About Me</title>
                <meta name="description" content="Learn more about Kurt Metra, a Full-Stack Developer specializing in web and application development." />
                <link rel="canonical" href="https://www.kurtmetra.dev/en/about" />
                <link rel="alternate" hrefLang="en" href="https://www.kurtmetra.dev/en/about" />
                <link rel="alternate" hrefLang="tl" href="https://www.kurtmetra.dev/tl/about" />

                <meta property="og:title" content="Kurt Metra - About Me" />
                <meta property="og:description" content="Learn more about Kurt Metra, a Full-Stack Developer specializing in web and application development." />
                <meta property="og:url" content="https://www.kurtmetra.dev/en/about" />
                <meta property="og:type" content="website" />
            </Helmet>

        <main className="w-full min-h-screen flex flex-col items-center pt-20 pb-10 bg-background px-4 overflow-x-hidden">
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: 20}}
            className="w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] my-10 font-jetbrains mx-4 [&_p]:leading-relaxed [&_p]:text-justify">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">About</h1>
                <p className="text-text-primary mt-4">
                    <ReactMarkdown>
                        {t('about.p1')}
                    </ReactMarkdown>
                    
                </p>
                <p className="text-text-primary mt-4">
                    <ReactMarkdown>
                        {t('about.p2')}
                    </ReactMarkdown>
                </p>
                <p className="text-text-primary mt-4">
                    <ReactMarkdown>
                        {t('about.p3')}
                    </ReactMarkdown>
                </p>
                <p className="text-text-primary mt-4">
                    <ReactMarkdown>
                        {t('about.p4')}
                    </ReactMarkdown>    
                </p>
                <p className="text-text-primary mt-4">
                    <ReactMarkdown> 
                        {t('about.p5')}
                    </ReactMarkdown>
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary my-5">Timeline</h1>
                <VerticalTimeline steps={steps} />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary my-5">Future Goals</h1>
                <p className="text-text-primary mt-4">
                    <ReactMarkdown>{t('about.p6')}</ReactMarkdown>  
                </p>
                <p className="text-text-primary mt-4">
                    <ReactMarkdown>{t('about.p7')}</ReactMarkdown>
                </p>
                <p className="text-text-primary mt-4">
                    Wanna hire me? See the <a href="/pricing" className="text-primary hover:underline underline-offset-4">pricing page</a> for more info!
                </p>
            </motion.div>
            <Footer />
        </main>
        </>
    )
}