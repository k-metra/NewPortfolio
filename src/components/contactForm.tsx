import { motion } from "framer-motion";
import InputField from "./inputField";
import { useRef } from "react";
import { useNotification } from "../contexts/NotificationContext";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const { addNotification } = useNotification();
    const submitBtn = useRef<HTMLButtonElement | null>(null);
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";
    const contactForm = useRef<HTMLFormElement | null>(null);

    const { t } = useTranslation();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Submitting with details: ");
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        }
        console.log(data);

        if (submitBtn.current) { 
            submitBtn.current.disabled = true;
            submitBtn.current.innerText = "Sending...";
        }

        await fetch(`${apiUrl}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(async (res) => {
            if (res.ok) {
                addNotification("Your message has been sent successfully!", "success");

                setTimeout(() => {
                    addNotification("I will get back to you as soon as possible.", "info");
                }, 1000);
                if (contactForm.current) {
                    contactForm.current.reset();
                }

            } else {
                const errorData = await res.json();
                addNotification(`Failed to send message: ${errorData.message || 'Unknown error'}`, "error");
            }
        }).catch((err) => {
            addNotification(`An error occurred: ${err.message}`, "error");
        });

        if (submitBtn.current) {
            submitBtn.current.disabled = false;
            submitBtn.current.innerText = "Send Message";
        }

    }

    return (
        <div className="w-full flex flex-col gap-4 font-jetbrains my-10">
            <h2 className="text-2xl font-bold text-text-primary">Contact Form</h2>
            <p className="text-text-muted mb-6">{t('contact.body3')}</p>

            <form ref={contactForm} onSubmit={onSubmit} className="md:grid md:grid-cols-2 flex flex-col gap-4 w-full">
                <InputField label="Full Name" name="name" type="text" required={true} />
                <InputField label="Email Address" name="email" type="email" required={true} />
                <InputField label="Message" name="message" type="textarea" required={true} className="col-span-2" />
                <motion.button 
                
                whileHover={{ y: -5, boxShadow: "0px 4px 15px 10px rgba(0, 0, 0, 0.15)" }}
                ref={submitBtn}
                type="submit" className="w-full col-span-2 bg-background border-border border disabled:cursor-not-allowed text-text-primary font-bold py-3 rounded-md enabled:hover:bg-text-primary enabled:hover:text-background transition-colors">Send Message</motion.button>
            </form>
        </div>
    )
}