export default function Footer() {
    return (
        <footer className="py-10 mx-16 max-lg:mx-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Fadi Hareth. Built with Vite + React + TailwindCSS. Deployed with Netlify.
        </footer>
    );
}
