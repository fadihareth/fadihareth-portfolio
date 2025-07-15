import { useEffect, useState } from "react";

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const THRESHOLD = 100; // px scrolled before collapsing

    const links = [
        { href: "#about", text: "About" },
        { href: "#projects", text: "Projects" },
        { href: "#experience", text: "Experience" },
    ];

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
                sticky top-0 z-50 flex px-16 items-center
                bg-white/90 dark:bg-gray-950/75 backdrop-blur
                transition-all duration-300 ease-out
                ${collapsed ? "h-18 shadow" : "h-[180px]"}
            `}
        >
            <div className={`flex grow items-center justify-between`}>
                <div
                    className={`
                        flex ${collapsed ? "flex-row items-baseline gap-4" : "flex-col items-start"}
                        origin-left transition-transform duration-300 ease-out
                        ${collapsed ? "scale-65" : "scale-100"}
                    `}
                >
                    <h1 className={"font-bold"} style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)" }}>
                        Fadi Hareth
                    </h1>
                    <caption style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}>
                        Full Stack Developer
                    </caption>
                </div>
                <ul className={"flex gap-6 max-lg:hidden"}>
                    {links.map(({ href, text }) => (
                        <li key={href}>
                            <a href={href} className="font-medium hover:text-slate-500 transition">{text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
