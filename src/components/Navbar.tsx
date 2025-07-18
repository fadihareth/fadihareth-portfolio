import { useEffect, useState } from "react";

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const THRESHOLD = 10; // px scrolled before collapsing

    const links = [
        { id: "about", text: "About" },
        { id: "experience", text: "Experience" },
        { id: "projects", text: "Projects" },
    ];

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = collapsed ? -80 : -160; // height of header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }    

    useEffect(() => {
        const onScroll = () => {
            const shouldCollapse = window.scrollY > THRESHOLD;
            setCollapsed(prev => (prev !== shouldCollapse ? shouldCollapse : prev));
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
                sticky top-0 z-50 flex px-16 max-lg:px-8 items-center
                bg-white/90 dark:bg-neutral-950/75 backdrop-blur
                transition-all duration-300 ease-out
                ${collapsed ? "h-18 shadow" : "h-[150px]"}
            `}
        >
            <div className={`flex grow items-center justify-between`}>
                <div
                    className={`
                        flex ${collapsed ? "flex-row items-baseline gap-4 max-xs:gap-2" : "flex-col items-start"}
                        origin-left transition-transform duration-300 ease-out
                        ${collapsed ? "scale-65 max-xs:scale-90" : "scale-100"}
                    `}
                >
                    <h1 className={`font-bold text-5xl ${collapsed && "max-xs:text-2xl"}`}>
                        Fadi Hareth
                    </h1>
                    <p className={`text-2xl ${collapsed && "max-xs:text-base"}`}>
                        Full Stack Developer
                    </p>
                </div>
                <ul className={"flex gap-6 max-lg:hidden"}>
                    {links.map(({ id, text }) => (
                        <li key={id}>
                            <button
                                className="font-medium hover:text-slate-500 transition cursor-pointer"
                                onClick={() => scrollToSection(id)}
                            >
                                {text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
