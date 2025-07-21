import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import {
    damageCalc,
    damageCalcDark,
    statratApp,
    statratDashboard,
    statratDashboardDark
} from "../assets";

const projects = [
    {
        id: 0,
        title: "Damage Calculator",
        headline: "Native app for quick Pokémon calculations",
        description: `
            Individually developed an interactive calculator for a video game series as a native iOS app.
            Compacted a feature-heavy app into an intuitive and mobile-friendly experience under Apple guidelines.
            Still maintained after ${new Date().getFullYear() - 2021} years with updates introducing major
            improvements and applying user feedback.
        `,
        link: "https://apps.apple.com/ca/app/damage-calculator/id1554958775",
        videoLink: "https://www.youtube.com/embed/82AjCKzhnS4",
        images: {
            light: damageCalc,
            dark: damageCalcDark
        },
        tags: ["SwiftUI", "Swift", "Python"]
    },
    {
        id: 1,
        title: "Statrat Baseball iOS App",
        headline: "Social stat tracking platform for baseball players",
        description: `
            Took over full development of the native iOS app during 2024-25, adding new features such as
            comment tagging, profile customization, media upload, in-app advertising, and more. Helped
            modernize the app by prototyping and implementing UI redesigns, ensuring both the iOS
            and Android app stayed consistent.

        `,
        link: "https://apps.apple.com/ca/app/statrat-baseball/id506977885",
        videoLink: "https://www.youtube.com/embed/XTtXMZCfENw",
        images: {
            light: statratApp,
            dark: statratApp
        },
        tags: ["SwiftUI", "Swift"]
    },
    {
        id: 2,
        title: "Statrat Advertiser Dashboard",
        headline: "Manage ad campaigns to run within the app",
        description: `
            Web app built from scratch giving customers a dashboard for creating ad campaigns to run within the
            Statrat mobile app. Customers can customize their campaign and get an analytics breakdown on it's performance.
            Ads are generated as HTML templates allowing for easy embedding in both iOS and Android.
        `,
        link: "https://dashboard.statratapp.com",
        videoLink: "https://www.youtube.com/embed/vhUt21N1vYA",
        images: {
            light: statratDashboard,
            dark: statratDashboardDark
        },
        tags: ["React", "Vite", "TypeScript", "HTML"]
    }
];

// Handle animations when changing project
const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
    }),
};

// Handle swipe gestures to only detect quick and large swipes
const SWIPETHRESHOLD = 100;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHoveringLink, setIsHoveringLink] = useState<boolean>(false);
    const [showDemo, setShowDemo] = useState(false);
    const [colorScheme, setColorScheme] = useState("light");

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
            'change', e => setColorScheme(e.matches ? 'dark' : 'light')
        );
        setColorScheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => { });
        }
    }, []);

    function toggleShowDemo() {
        // Prevent scrolling when demo is shown
        document.body.style.overflow = showDemo ? "unset" : "hidden";
        setShowDemo(!showDemo);
    }

    function paginate(dir: number, i: number | null = null) {
        if (i !== index) {
            setDirection(dir);
            if (i !== null) {
                setIndex(i);
            } else {
                setIndex((prev) => (prev + dir + projects.length) % projects.length);
            }
        }
    };

    function onHover(v: boolean) {
        if (!isMobile) {
            setIsHoveringLink(v);
        }
    };

    const ArrowButton = ({ dir, isMobile }: { dir: 1 | -1, isMobile: boolean }) => {
        return (
            <button
                onClick={() => paginate(dir)}
                className={`
                    text-2xl text-tertiary hover:text-highlight cursor-pointer
                    ${isMobile ? "lg:hidden" : "max-lg:hidden"}
                `}
            >
                <i className={`fa fa-arrow-${dir === 1 ? "right" : "left"}`} aria-hidden="true" />
            </button>
        )
    };

    return (
        <section id="projects" className="space-y-4">
            <div
                className={`
                    fixed top-0 left-0 w-full h-dvh z-100 bg-black/60 backdrop-blur-xs
                    duration-300 ease-in-out transition max-md:p-10 p-20
                    ${showDemo ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                onClick={toggleShowDemo}
            >
                {showDemo && <iframe id="demo-frame" className="w-full h-full ring ring-secondary" src={projects[index].videoLink} />}
            </div>
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="flex gap-4 items-center max-lg:flex-col">
                <ArrowButton dir={-1} isMobile={false} />
                <div className="relative w-full h-150 max-xs:h-170 overflow-hidden rounded-3xl ring ring-secondary bg-white/3">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 flex max-lg:flex-col gap-4 max-lg:gap-2 p-4 max-lg:pt-2"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -SWIPETHRESHOLD) {
                                    paginate(1);
                                } else if (swipe > SWIPETHRESHOLD) {
                                    paginate(-1);
                                }
                            }}
                        >
                            <img
                                className="h-full lg:max-w-2/3 object-contain max-lg:h-50 max-lg:object-cover max-lg:w-full max-lg:object-top"
                                src={colorScheme == "light" ? projects[index].images.light : projects[index].images.dark}
                                alt={`${projects[index].title} Screenshot`}
                            />
                            <div className="flex flex-col gap-6 pt-10 max-lg:pt-3">
                                <a
                                    href={projects[index].link}
                                    target="_blank"
                                    className="flex flex-col gap-1"
                                    onMouseEnter={() => onHover(true)}
                                    onMouseLeave={() => onHover(false)}
                                >
                                    <div
                                        className={`
                                            flex gap-2 items-center
                                            origin-bottom-left transition duration-200 ease-out
                                            ${isHoveringLink && "text-highlight scale-101"}
                                        `}
                                    >
                                        <h6 className="text-xl font-bold">{projects[index].title}</h6>
                                        <i className="fa fa-external-link" aria-hidden="true" />
                                    </div>
                                    <p className="text-sm font-semibold text-tertiary">{projects[index].headline}</p>
                                </a>
                                <p>{projects[index].description}</p>
                                <ul className="flex flex-wrap gap-2">
                                    {projects[index].tags.map((tag, i) => (
                                        <li key={i}>
                                            <span className="tag px-3 py-1 text-sm font-medium">
                                                {tag}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className={`
                                        tag hover:bg-tertiary py-2 px-4
                                        w-fit max-lg:w-full inline-flex gap-3 items-center cursor-pointer
                                    `}
                                    onClick={toggleShowDemo}
                                >
                                    <i className="fa-solid fa-video"></i>
                                    Watch Demo
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <ArrowButton dir={1} isMobile={false} />
                <div className="flex justify-between w-full px-4 items-center lg:hidden">
                    <ArrowButton dir={-1} isMobile={true} />
                    <div className="flex justify-center gap-2">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i > index ? 1 : -1, i)}
                                className={`
                                    h-2 w-2 rounded-full transition-all
                                    ${i === index
                                        ? "bg-highlight scale-125"
                                        : "bg-secondary hover:bg-tertiary"
                                    }
                                `}
                            />
                        ))}
                    </div>
                    <ArrowButton dir={1} isMobile={true} />
                </div>
            </div>
        </section>
    );
}
