import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
    return (
        <div className="font-display scroll-smooth">
            <Navbar />
            <main className="mx-16">
                <Experience />
            </main>
            <Footer />
        </div>
    );
}
