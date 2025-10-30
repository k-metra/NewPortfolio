import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="font-jetbrains w-screen min-h-16 bg-background cursor-pointer text-text-primary flex items-center justify-between px-28">
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
            className="text-2xl font-bold">
                Kurt Metra
            </motion.h1>

            <motion.div 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row space-x-6 gap-1">
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#projects" className="hover:text-gray-400">Projects</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
            </motion.div>
        </header>
    )
}