export default function Footer() {
    return (
        <footer className="w-full py-6 bg-background-light mt-auto flex flex-col items-center text-text-muted font-jetbrains text-sm">
            <hr className="border-t border-border w-[80%] flex justify-center items-center my-6" />
            <p className="text-text-secondary text-sm">&copy; {new Date().getFullYear()} Kurt Metra. All rights reserved.</p>
        </footer>
    )
}