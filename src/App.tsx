import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
    return (
        <div className="font-display scroll-smooth bg-white text-black dark:bg-gray-950 dark:text-white">
            <Navbar />
            <main className="mx-16 space-y-8">
                <Experience />
            </main>
            <Footer />
        </div>
    );
}
