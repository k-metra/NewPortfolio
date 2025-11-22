import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export type PricingCardProps = {
    title: string;
    description: string;
    price: string;
    features: string[];
    popular?: boolean;
}

export default function PricingCard({ title, description, price, features, popular }: PricingCardProps) {
    return (
        <motion.div 
            whileHover={{ y: -10, animationDuration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col h-full md:max-w-lg max-w-full rounded-lg shadow-lg ${popular ? 'border-2 border-text-primary [box-shadow:0px_-50px_80px_-20px_rgba(255,255,255,0.025)_inset]  drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)]' : 'border border-border'} relative font-jetbrains text-text-primary`}>
                {popular && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white text-background px-4 py-1 text-sm font-semibold font-jetbrains rounded-full z-10">
                        Popular
                    </div>
                )}
                <div className="p-6">
                    <h3 className="text-2xl font-bold my-0">
                        {title}
                    </h3>
                    <p className="mt-2 text-text-muted">
                        {description}
                    </p>
                    <div className="mt-6">
                        <span className="text-4xl font-bold text-text-primary">{price}</span>
                    </div>
                </div>
                <div className="flex flex-grow px-6 mb-6">
                    <ul className="space-y-3 m-0 p-0 list-none">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center list-none">
                                <span className="mr-4 text-text-primary"><FaCheck /></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
        </motion.div>
    )
}