import { useState } from "react";

const jobs = [
    {
        id: 0,
        role: "Software Developer",
        company: "Statrat",
        period: "May 2024 - May 2025",
        bullets: [
            "Took over full responsibility of the iOS app, creating new features and modernizing the user experience.",
            "Leveraged AI tools to increase development efficiency and readily introduce unit testing into the project.",
            "Collaborated in designing the backend and prototyping the frontend UI, ensuring a cohesive design between the iOS and Android app.",
            "Lead new initiatives by building web apps from scratch, allowing the company to expand into new markets by providing business partners dashboards for tracking analytics and stats.",
        ],
        link: "https://www.statrat.ca",
        tags: ["SwiftUI", "Swift", "React", "TypeScript", "Vite"]
    },
    {
        id: 1,
        role: "Software Engineer",
        company: "ApplyBoard",
        period: "Sep 2021 - Sep 2022",
        bullets: [
            "Worked full-stack on a web application with Ruby serving REST API and React as the frontend.",
            "Developed internal tools for managing data used by hundreds of employees to improve efficiency in modifying the website.",
            "Cooperated with a team applying AGILE methodologies to develop and test new features productively.",
            "Wrote Cypress and unit tests to ensure code changes are well-tested and maintain high coverage.",
        ],
        link: "https://www.applyboard.com/search",
        tags: ["React", "JavaScript", "Ruby", "Ruby on Rails", "Python", "MySQL"]
    },
];

export default function Experience() {
    const [hoverId, setHoverId] = useState<number | null>(null);

    function onMouseEnter(id: number) {
        setHoverId(id);
    }

    function onMouseLeave() {
        setHoverId(null);
    }

    return (
        <section id="experience" className="space-y-6">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="flex flex-col space-y-8" onMouseLeave={onMouseLeave}>
                {jobs.map((job) => (
                    <a key={job.id} href={job.link} target="_blank" onMouseEnter={() => onMouseEnter(job.id)}>
                        <div
                            className={`
                                flex flex-col space-y-3
                                origin-left duration-300 ease-out
                                ${hoverId != null && hoverId != job.id && "opacity-50 scale-99"}
                            `}
                        >
                            <div>
                                <p className={`${hoverId === job.id && "text-blue-700 dark:text-blue-100"} font-semibold`}>
                                    {job.role} - {job.company} <i className="fa fa-external-link" aria-hidden="true" />
                                </p>
                                <p className="text-sm color-subheadline">{job.period}</p>
                            </div>
                            <ul className="list-disc ml-6">
                                {job.bullets.map((bullet, i) => (
                                    <li key={i}>
                                        <p>{bullet}</p>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex flex-wrap gap-2">
                                {job.tags.map((tag, i) => (
                                    <li key={i}>
                                        <span className="color-tag rounded-4xl px-3 py-1 text-sm font-medium ring-1 ring-inset">
                                            {tag}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
