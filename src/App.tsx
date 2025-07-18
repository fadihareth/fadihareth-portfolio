import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
    return (
        <div className="font-display scroll-smooth">
            <Navbar />
            <main className="mx-16 max-lg:mx-8 space-y-8">
                <Contact />
                <About />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
