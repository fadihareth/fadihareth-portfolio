const links = [
    {
        url: "https://www.linkedin.com/in/fadi-hareth/",
        icon: "fa-linkedin-square",
    },
    {
        url: "https://github.com/fadihareth",
        icon: "fa-github",
    },
]

export default function Contact() {
    return (
        <div className="flex gap-3 items-center">
            {links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" className="hover:text-slate-500 transition">
                    <i className={`fa ${link.icon} fa-2x`} aria-hidden="true" />
                </a>
            ))}
            <div className="separator" />
            <a href="mailto:fadihareth@gmail.com" className="hover:text-slate-500 transition">
                fadihareth@gmail.com
            </a>
        </div>
    );
}
