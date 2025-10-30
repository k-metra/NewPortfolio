import { FaArrowRight } from "react-icons/fa";

type ExperienceProps = {
    title: string,
    description: string,
    when: string,
    imageUrl?: string,
    href: string,
}

export default function ExperienceCard({ title, description, when, imageUrl, href}: ExperienceProps ) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
        <div className="[border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] w-full bg-surface/50 max-w-3xl bg-card-bg rounded-xl transform-gpu sm:min-h-[400px] md:min-h-[500px] justify-between shadow-md p-6 flex flex-col items-center md:items-start gap-4 relative group overflow-hidden hover:bg-surface/70 transition-colors duration-300 ease-in-out">
            <div>
                {imageUrl && (<img src={imageUrl} alt={title} className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover" />)}
            </div>
            <div className="pointer-events-none flex flex-col gap-1 p-3 transition-all duration-300 group-hover:-translate-y-10 z-10">
                <h2 className="text-xl font-semibold text-text-primary mb-2">{title}</h2>
                <p className="text-text-secondary mb-2">{description}</p>
                <span className="text-sm text-text-muted">{when}</span>
            </div>
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ml-2">
                <span className="text-text-muted text-sm">Learn More <FaArrowRight className="inline ml-2" /></span>
            </div>
        </div>
        </a>
    )
}