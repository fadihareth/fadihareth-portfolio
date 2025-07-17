import { useEffect, useState } from "react";

const projects = [
    {
        id: 0,
        title: "Damage Calculator",
        headline: "Native iOS app for quick Pokémon damage calculations",
        description: `
            Individually developed an interactive calculator for a video game series as a native iOS app.
            Compacted a feature-heavy app into an intuitive and mobile-friendly experience under Apple guidelines.
            Still maintained after ${new Date().getFullYear() - 2021} years with updates introducing major improvements and applying user feedback.
        `,
        link: "https://apps.apple.com/ca/app/damage-calculator/id1554958775",
        videoLink: "https://www.youtube.com/embed/82AjCKzhnS4",
        images: {
            light: "src/assets/damage_calculator.png",
            dark: "src/assets/damage_calculator_dark.png"
        },
        tags: ["SwiftUI", "Swift", "Python"]
    },
    {
        id: 1,
        title: "Statrat Baseball iOS App",
        headline: "Social stat tracking platform for baseball players",
        description: `
            Individually developed an interactive calculator for a video game series as a native iOS app.
            Compacted a feature-heavy app into an intuitive and mobile-friendly experience under Apple guidelines.
            Still maintained after ${new Date().getFullYear() - 2021} years with updates introducing major improvements and applying user feedback.
        `,
        link: "https://apps.apple.com/ca/app/statrat-baseball/id506977885",
        videoLink: "",
        images: {
            light: "src/assets/statrat-app.png",
            dark: "src/assets/statrat-app.png"
        },
        tags: ["SwiftUI", "Swift"]
    }
]

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [isHoveringLink, setIsHoveringLink] = useState<boolean>(false);
    const [showDemo, setShowDemo] = useState(false);
    const [colorScheme, setColorScheme] = useState("light");

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setColorScheme(e.matches ? 'dark' : 'light'));
        setColorScheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
        }
    }, []);

    function toggleShowDemo() {
        if (showDemo) {
            // Reset iFrame when closing demo to prevent video from running
            (document.getElementById("demo-frame") as HTMLIFrameElement).src = projects[index].videoLink;
        }
        // Prevent scrolling when demo is shown
        document.body.style.overflow = showDemo ? "unset" : "hidden";
        setShowDemo(!showDemo)
    }

    function next() {
        setIndex(index === projects.length - 1 ? 0 : index + 1);
    }

    function prev() {
        setIndex(index === 0 ? projects.length - 1 : index - 1);
    }

    return (
        <section id="projects" className="space-y-2">
            <div
                className={`
                    fixed top-0 left-0 w-full h-dvh bg-black/80 backdrop-blur-xs z-100
                    duration-300 ease-out transition
                    ${showDemo ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                onClick={toggleShowDemo}
            >
                <iframe id="demo-frame" className="w-full h-full p-20" src={projects[index].videoLink} />
            </div>
            <h2 className="text-2xl font-bold">Projects & Works</h2>
            <div className="flex max-md:flex-col gap-4 max-md:gap-2 p-4 max-md:pt-0 rounded-3xl shadow-lg dark:bg-gray-900/40 dark:shadow-neutral-950">
                <img
                    className="h-150 object-contain max-md:h-50 max-md:object-cover max-md:w-full max-md:object-top"
                    src={colorScheme == "light" ? projects[index].images.light : projects[index].images.dark}
                    alt={`${projects[index].title} Screenshot`}
                />
                <div className="flex flex-col gap-6">
                    <a
                        href={projects[index].link}
                        target="_blank"
                        className="flex flex-col gap-1 pt-10 max-md:pt-3"
                        onMouseEnter={() => setIsHoveringLink(true)}
                        onMouseLeave={() => setIsHoveringLink(false)}
                    >
                        <div
                            className={`
                                flex gap-2 items-center
                                origin-bottom-left transition duration-200 ease-out
                                ${isHoveringLink && "text-blue-700 dark:text-blue-100 scale-101"}
                            `}
                        >
                            <h6 className="text-xl font-bold">{projects[index].title}</h6>
                            <i className="fa fa-external-link" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-semibold color-subheadline">{projects[index].headline}</p>
                    </a>
                    <p>{projects[index].description}</p>
                    <ul className="flex flex-wrap gap-2">
                        {projects[index].tags.map((tag, i) => (
                            <li key={i}>
                                <span className="color-tag rounded-4xl px-3 py-1 text-sm font-medium ring-1 ring-inset">
                                    {tag}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 w-fit max-md:w-full py-2 px-4 rounded inline-flex gap-3 items-center cursor-pointer"
                        onClick={toggleShowDemo}
                    >
                        <i className="fa-solid fa-video"></i>
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    );
}
