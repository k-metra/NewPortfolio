type Steps = {
    label: string;
    description: string;
    date: string;
    active?: boolean;
}

export default function VerticalTimeline({ steps }: { steps: Array<Steps> }) {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700 font-jetbrains my-10">
            {steps.map((step, index) => (
                <li key={index} className="mb-10 ms-6">
                    <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-2${step.active ? 'ring-gray-700 bg-text-primary [box-shadow:0_0_10px_8px_rgba(255,255,255,0.1)]' : ' bg-background ring-gray-700'}`}>
                        
                    </span>
                    <div className="pl-3">
                        <h3 className={`\font-semibold ${step.active ? 'text-primary font-bold text-xl' : 'text-text-primary text-lg'}`}>{step.label}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-text-muted">{step.date}</time>
                        <p className="text-base font-normal text-text-primary">{step.description}</p>
                    </div>
                </li>
            ))}
        </ol>
    )
}