import React from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

export type ContactProps = {
    icon: React.ReactElement<IconType>;
    name: string;
    anchor: string;
    url?: string;
}

export default function ContactAvatar({ icon, name, anchor, url }: ContactProps) {
    return (
        <a href={url ? url : ""} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 text-text-primary hover:text-accent transition-colors">
            <div className="p-4 border-border border rounded-lg hover:bg-white hover:text-background transition-colors duration-300 ease-in-out cursor-pointer">
                {React.cloneElement(icon, { size: 40 } as any)}
            </div>
            <p className="text-lg text-text-primary font-bold font-jetbrains">{name}</p>
            <p className="text-[13px] text-text-muted font-jetbrains">{anchor}</p>
        </a>
    )
}