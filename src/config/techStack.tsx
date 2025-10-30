import { IconType } from "react-icons";
import { FaReact, FaBootstrap, FaVuejs, FaLaravel, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDjango, SiMongodb, SiLua } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandCSharp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";




export const frontend: Record<string, { icon: React.ReactElement<IconType> }> = {
    "React": {
        "icon": <FaReact size={35} />,
    },
    "Tailwind": {
        "icon": <SiTailwindcss size={35} />,
    },
    "Motion": {
        "icon": <TbBrandFramerMotion size={35} />,
    },
    "Bootstrap": {
        "icon": <FaBootstrap size={35} />,
    },
    "Vue.js": {
        "icon": <FaVuejs size={35} />,
    },
}

export const backend: Record<string, { icon: React.ReactElement<IconType> }> = {
    "Laravel": {
        "icon": <FaLaravel size={35} />,
    },
    "Django": {
        "icon": <SiDjango size={35} />,
    },
    "Node.js": {
        "icon": <FaNodeJs size={35} />,
    },
    "MongoDB": {
        "icon": <SiMongodb size={35} />,
    },
    "MySQL": {
        "icon": <GrMysql size={35} />,
    }

}

export const languages: Record<string, { icon: React.ReactElement<IconType> }> = {
    "TypeScript": {
        "icon": <SiTypescript size={35} />,
    },
    "Python": {
        "icon": <FaPython size={35} />,
    },
    "Lua": {
        "icon": <SiLua size={35} />,
    },
    "Java": {
        "icon": <FaJava size={35} />,
    },
    "C#": {
        "icon": <TbBrandCSharp size={35} />,
    }
    
}