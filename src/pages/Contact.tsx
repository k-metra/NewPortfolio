import { motion } from "framer-motion";
import ContactAvatar from "../components/contactAvatar";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Contact() {
    return (
        <main className="w-full min-h-screen flex font-jetbrains flex-col items-center pt-20 pb-10 bg-background px-4 overflow-x-hidden">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: 20}}
            className="w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">Contact Me</h1>
                <p className="text-text-muted leading-relaxed mt-4">You can contact me via E-mail, Facebook, or even by phone number. I usually respond within a day.</p>

                <div className="mt-4 flex flex-row gap-4 items-center justify-around border border-border p-5 rounded-lg">
                    <ContactAvatar icon={<MdOutlineMailOutline />} name="E-mail" anchor="metrakurt@gmail.com" />
                    <ContactAvatar icon={<FaFacebook />} name="Facebook" anchor="Kurt Metra" url="https://www.facebook.com/kurt.metra" />
                    <ContactAvatar icon={<IoIosPhonePortrait />} name="Phone Number" anchor="+63 993 992 8496" />
                    <ContactAvatar icon={<FaGithub />} name="GitHub" anchor="k-metra" url="https://github.com/k-metra" />
                </div>
            </motion.div>
        </main>
    )
}