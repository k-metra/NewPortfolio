import { PricingType, pricingPlans, otherPlans } from '../config/pricing';
import PricingCard from '../components/pricingCard';
import Footer from '../components/footer';

export default function Pricing() {
    return (
        <>
        <main className="w-full min-h-screen flex flex-col items-center pt-20 bg-background overflow-x-hidden font-jetbrains">
            <div className="w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4 text-text-primary font-jetbrains">Web Services</h1>
                <p className="text-text-muted text-sm py-4 border-t border-border mt-4 mb-8 text-center">Choose a package that best suits your needs, or contact me for a custom-tailored offer.</p>
            </div>

            <div className="md:w-[60%] w-full max-w-[90vw] grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-16">
                {pricingPlans.map((plan: PricingType, index: number) => (
                    <PricingCard key={index} title={plan.name} description={plan.description} price={plan.price} features={plan.features} popular={plan.popular} />
                ))}
            </div>

            <div className="w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4 text-text-primary font-jetbrains">Additional Services</h1>
                <p className="text-text-muted text-sm py-4 border-t border-border mt-4 mb-8 text-center">Need something extra? What about something else apart from 
                    websites? Don't worry! I offer other services.</p>
            </div>

            <div className="md:w-[60%] w-full max-w-[90vw] grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-16">
                {otherPlans.map((plan: PricingType, index: number) => (
                    <PricingCard key={index} title={plan.name} description={plan.description} price={plan.price} features={plan.features} popular={plan.popular} />
                ))}
            </div>
        </main>

        <Footer />
        </>
        
    )
}