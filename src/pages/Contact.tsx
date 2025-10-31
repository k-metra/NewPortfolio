import { motion } from "framer-motion";
import ContactAvatar from "../components/contactAvatar";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <main className="w-full min-h-screen flex font-jetbrains flex-col items-center pt-20 pb-10 bg-background px-4 overflow-x-hidden">
            <Helmet>
                <title>Kurt Metra - Contact Me</title>
                <meta name="description" content="Get in touch with Kurt Metra, Full-Stack Developer. Reach out via email, phone, Facebook, or GitHub." />
                <link rel="canonical" href="https://www.kurtmetra.dev/en/contact" />
                <link rel="alternate" hrefLang="en" href="https://www.kurtmetra.dev/en/contact" />
                <link rel="alternate" hrefLang="tl" href="https://www.kurtmetra.dev/tl/contact" />

                <meta property="og:title" content="Kurt Metra - Contact Me" /> 
                <meta property="og:description" content="Get in touch with Kurt Metra, Full-Stack Developer. Reach out via email, phone, Facebook, or GitHub." />
                <meta property="og:url" content="https://www.kurtmetra.dev/en/contact" />
                <meta property="og:type" content="website" />
            </Helmet>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: 20}}
            className="w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">Contact Me</h1>
                <p className="text-text-muted leading-relaxed mt-4">{t('contact.body')}</p>

                <div className="mt-4 md:flex grid grid-cols-2 md:flex-row gap-4 items-center md:justify-around border border-border p-5 rounded-lg">
                    <ContactAvatar icon={<MdOutlineMailOutline />} name="E-mail" anchor="metrakurt@gmail.com" />
                    <ContactAvatar icon={<FaFacebook />} name="Facebook" anchor="Kurt Metra" url="https://www.facebook.com/m.trakurt" />
                    <ContactAvatar icon={<IoIosPhonePortrait />} name="Phone Number" anchor="+63 993 992 8496" />
                    <ContactAvatar icon={<FaGithub />} name="GitHub" anchor="k-metra" url="https://github.com/k-metra" />
                </div>
            </motion.div>
        </main>
    )
}