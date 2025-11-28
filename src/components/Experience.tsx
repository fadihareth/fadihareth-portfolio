import { useState } from "react";

const jobs = [
    {
        id: 0,
        role: "Software Developer",
        company: "Statrat",
        period: "May 2024 - May 2025",
        bullets: [
            "Took full ownership of the native iOS app with thousands of active users, creating new features and modernizing the user experience to match current design standards.",
            "Collaborated closely on prototyping the backend and frontend, ensuring UI/UX consistency between the iOS and Android app.",
            "Initiated and developed web apps from scratch, creating advertiser dashboards that opened up new revenue channels and supported 10+ business partners.",
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
            "Built full-stack features for a web app with Ruby serving REST API and a React frontend.",
            "Developed internal tools to streamline content management, saving 10+ hours per week for CX.",
            "Cooperated with a team using AGILE methodologies to deliver and iterate on new features with multiple deployments to production every week.",
            "Wrote robust unit and end-to-end Cypress tests to ensure 80%+ coverage and long-term code reliability.",
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
        <section id="experience" className="space-y-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="flex flex-col space-y-4" onMouseLeave={onMouseLeave}>
                {jobs.map((job) => (
                    <a key={job.id} href={job.link} target="_blank" onClick={onMouseLeave} onMouseEnter={() => onMouseEnter(job.id)}>
                        <div
                            className={`
                                flex flex-col space-y-3
                                origin-left duration-300 ease-out
                                ${hoverId != null && hoverId != job.id && "opacity-50 scale-99"}
                            `}
                        >
                            <div>
                                <p className={`${hoverId === job.id && "text-highlight"} font-semibold`}>
                                    {job.role} - {job.company} <i className="fa fa-external-link" aria-hidden="true" />
                                </p>
                                <p className="text-sm text-tertiary">{job.period}</p>
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
                                        <span className="tag px-3 py-1 text-sm font-medium">
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
