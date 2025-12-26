type Fields = {
    label: string;
    name: string;
    type: string;
    required?: boolean;
    className?: string;
}

export default function InputField({ label, name, type, required = true, className = ""}: Fields) {
    return (
        <label className={`relative block w-full ${className}`}>
                {type === "textarea" ? ( <textarea name={name} className={`px-6 py-3 align-middle peer text-text-primary bg-background border border-border rounded-md min-h-56 resize-y w-full focus:outline-none focus:border-2 focus:border-text-primary transition-colors ${className}`} required={required}></textarea> ) 
                :( <input name={name} type={type} className={`px-6 block peer text-text-primary bg-background border border-border rounded-md min-h-12 w-full focus:outline-none focus:border-2 focus:border-text-primary transition-colors`} required={required} /> )}


                {type !== 'textarea' ? (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 bg-background px-2 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:-translate-y-1/2 peer-focus:top-[2.5px] peer-focus:text-sm peer-focus:-translate-y-4 peer-valid:top-[2.5px] peer-valid:-translate-y-4 peer-valid:text-sm">{label}</span>
                ) : (
                    <span className="absolute left-4 top-3 text-text-muted pointer-events-none transition-all duration-200 ease-in-out peer-placeholder-shown:top-4 bg-background px-2 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:translate-y-0 peer-focus:top-[2.5px] peer-focus:text-sm peer-focus:-translate-y-4 peer-valid:top-[2.5px] peer-valid:-translate-y-4 peer-valid:text-sm">{label}</span>
                )}
        </label>
    )
}