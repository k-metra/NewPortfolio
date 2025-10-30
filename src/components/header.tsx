export default function Header() {
    return (
        <header className="font-jetbrains w-screen min-h-16 bg-background text-text-primary flex items-center justify-between px-28">
            <h1 className="text-2xl font-bold">Kurt Metra</h1>

            <div className="flex flex-row space-x-6 gap-1">
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#projects" className="hover:text-gray-400">Projects</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
            </div>
        </header>
    )
}