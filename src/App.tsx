import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
    return (
        <div className="font-display scroll-smooth bg-white text-black dark:bg-neutral-950 dark:text-white">
            <Navbar />
            <main className="mx-16 max-lg:mx-8 space-y-8">
                <Contact />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
