export type PricingType = {

    name: string;
    description: string;
    price: string;
    features: string[];
    popular?: boolean;
}

export const pricingPlans: PricingType[] = [
    {
        "name": "Single-page Website",
        "description": "A sleek and modern single-page website to showcase your portfolio or business.",
        "price": "from ₱2,500",
        "features": [
            "Responsive design for all devices",
            "Free SSL Certificate",
            "Basic SEO optimization",
            "Contact form integration",
            "1 revision included"
        ]
    },
    {
        "name": "Basic Website",
        "description": "Multi-page Website for businesses or individuals looking to expand their online presence. Ideal for capstones or small businesses.",
        "price": "from ₱10,000",
        "features": [
            "Everything in Single-page Website",
            "Up to 10 subpages",
            "Blog integration",
            "5 revisions included (free of charge)",
            "Editable content via markdown"
        ],
        "popular": true
    },
    {
        "name": "Professional Website",
        "description": "A comprehensive website solution with its own CMS and editable content. Ideal for companies or larger projects.",
        "price": "from ₱40,000",
        "features": [
            "Everything in Basic Website",
            "Customizable templates",
            "Advanced SEO features",
            "Priority support",
            "Full CMS system",
            "Up to ∞ subpages"
        ]
    },
    {
        "name": "Hosting and Domain Setup",
        "description": "Get your website online with professional hosting and domain setup services. Suitable for IT/CS students looking to host their projects.",
        "price": "from ₱800/mo",
        "features": [
            "Reliable hosting with 99.9% uptime",
            "Free SSL certificate",
            "Domain registration assistance",
            "Regular backups and security checks"
        ]
    },
]

export const otherPlans: PricingType[] = [
    {
        "name": "Programming Tutoring Sessions",
        "description": "Having trouble learning how to code? Explore my one-on-one programming tutoring sessions to help you master your programming skills and unlock your full potential.",
        "price": "from ₱249/hr",
        "features": [
            "Personalized learning plans",
            "Flexible scheduling",
            "Hands-on coding exercises",
            "Python, Java, JavaScript, and more",
            "Access to exclusive resources"
        ],
        "popular": true
    },
    {
        "name": "Research Documentation",
        "description": "Professional research documentation services to help you compile and present your findings effectively.",
        "price": "from ₱1,500",
        "features": [
            "Comprehensive research support",
            "Customizable documentation templates",
            "Collaboration with subject matter experts",
            "Timely delivery and revisions"
        ]
    },
    {
        "name": "IT Consultation",
        "description": "Comprehensive IT consultation services to help you lift up your business, or your capstone project.",
        "price": "from ₱150",
        "features": [
            "Personalized IT solutions",
            "System analysis and recommendations",
            "Implementation support",
            "Ongoing maintenance and support"
        ]
    },
    {
        "name": "Basic Software Application",
        "description": "Custom-built basic software applications built in C# and WinFormApps for your business or personal needs.",
        "price": "from ₱800",
        "features": [
            "MySQL Database integration",
            "User-friendly interface",
            "Basic functionality tailored to your needs",
            "Installation and setup support",
            "Revisions free of charge"
        ]
    },
    {
        "name": "Graphic Design",
        "description": "Professional graphic design services to enhance your brand and marketing materials.",
        "price": "from ₱500",
        "features": [
            "Custom logo design",
            "Social media graphics",
            "Print materials (brochures, business cards, etc.)",
            "Brand identity development",
            "Unlimited revisions"
        ]
    },
    {
        "name": "PC Troubleshoot and Repair",
        "description": "Slow system? Hardware problems? Let's help your PC get back in shape.",
        "price": "from ₱300",
        "features": [
            "Comprehensive diagnostics",
            "Virus and malware removal",
            "Recommendations for hardware upgrades",
            "Performance optimization",
            "Data backup and recovery assistance"
        ]
    }
]