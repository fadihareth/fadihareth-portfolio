export const site = {
	name: 'Fadi Hareth',
	title: 'Full Stack Developer',
	email: 'fadihareth@gmail.com',
	links: {
		linkedin: 'https://www.linkedin.com/in/fadi-hareth/',
		github: 'https://github.com/fadihareth'
	}
} as const;

export const about = `I'm a software developer with a passion for building intuitive, elegant experiences — not just in how users interact with an app, but also in how the codebase is structured underneath the hood. I've worked across both mobile and web platforms, and enjoy the unique challenges and creativity each one brings. Whether it's bringing ideas to life and solving problems through thoughtful design or blending it with personal hobbies to create something personal, software development is something I always enjoy and strive to continue improving at.`;

export type Job = {
	role: string;
	company: string;
	period: string;
	bullets: string[];
	link: string;
	tags: string[];
};

export const jobs: Job[] = [
	{
		role: 'Software Developer',
		company: 'Statrat',
		period: 'May 2024 - May 2025',
		bullets: [
			'Took full ownership of the native iOS app with thousands of active users, creating new features and modernizing the user experience to match current design standards.',
			'Collaborated closely on prototyping the backend and frontend, ensuring UI/UX consistency between the iOS and Android app.',
			'Initiated and developed web apps from scratch, creating advertiser dashboards that opened up new revenue channels and supported several business partners.'
		],
		link: 'https://www.statrat.ca',
		tags: ['SwiftUI', 'Swift', 'React', 'TypeScript', 'Vite']
	},
	{
		role: 'Software Engineer',
		company: 'ApplyBoard',
		period: 'Sep 2021 - Sep 2022',
		bullets: [
			'Built full-stack features for a web app with Ruby serving REST API and a React frontend.',
			'Developed internal tools to streamline content management, saving 10+ hours per week for CX.',
			'Cooperated with a team using AGILE methodologies to deliver and iterate on new features with multiple deployments to production every week.',
			'Wrote robust unit and end-to-end Cypress tests to ensure 80%+ coverage and long-term code reliability.'
		],
		link: 'https://www.applyboard.com/search',
		tags: ['React', 'JavaScript', 'Ruby', 'Ruby on Rails', 'Python', 'MySQL']
	}
];

export type Project = {
	slug: string;
	title: string;
	headline: string;
	description: string;
	link: string;
	videoEmbed: string;
	imageLight: string;
	imageDark: string;
	imageWidth: number;
	imageHeight: number;
	tags: string[];
};

export function getProjects(nowYear: number): Project[] {
	const years = Math.max(1, nowYear - 2021);
	return [
		{
			slug: 'damage-calculator',
			title: 'Damage Calculator',
			headline: 'Native app for quick Pokémon calculations',
			description: `Individually designed and developed an interactive calculator for a video game series as a native iOS app. Compacted a complex, feature-rich tool into an intuitive and mobile-friendly interface under Apple's design guidelines. Maintained and iterated on the app for ${years}+ years, delivering major improvements based on user feedback.`,
			link: 'https://apps.apple.com/ca/app/damage-calculator/id1554958775',
			videoEmbed: 'https://www.youtube.com/embed/82AjCKzhnS4',
			imageLight: '/projects/damage_calculator.webp',
			imageDark: '/projects/damage_calculator_dark.webp',
			imageWidth: 1470,
			imageHeight: 3000,
			tags: ['SwiftUI', 'Swift', 'Python']
		},
		{
			slug: 'optcg-leaks',
			title: 'OPTCG Leaks',
			headline: 'Compilating card reveals in one space',
			description:
				'Created a lightweight web app that tracks newly revealed One Piece Trading Card Game cards ahead of official card list releases. Developed with Svelte and TypeScript, with data and assets hosted on AWS. Automated daily card updates using custom Python and shell scripts to streamline data deployment.',
			link: 'https://optcgleaks.com',
			videoEmbed: 'https://www.youtube.com/embed/s2kqrl_6_2I?si=iN7mo1A6uhQ1eA8p',
			imageLight: '/projects/optcg_leaks.webp',
			imageDark: '/projects/optcg_leaks.webp',
			imageWidth: 3248,
			imageHeight: 1972,
			tags: ['Svelte', 'TypeScript', 'TailwindCSS']
		},
		{
			slug: 'genshin-tracker',
			title: 'Character Tracker',
			headline: 'Full-stack web app for progress tracking',
			description:
				'Built a full-stack web application using Svelte and TypeScript with a GraphQL backend and SQLite database, enabling users to create accounts and track progress on builds for the video game Genshin Impact. Designed and implemented both the frontend and backend architecture.',
			link: 'https://github.com/fadihareth/genshin-progress-tracker',
			videoEmbed: 'https://www.youtube.com/embed/J8RgBEFnkF0?si=mPHsmzYn3LjVxiEW',
			imageLight: '/projects/genshin_tracker.webp',
			imageDark: '/projects/genshin_tracker.webp',
			imageWidth: 3248,
			imageHeight: 1972,
			tags: ['Svelte', 'TypeScript', 'TailwindCSS', 'GraphQL', 'Node.js', 'SQLite']
		},
		{
			slug: 'statrat-ios',
			title: 'Statrat Baseball iOS App',
			headline: 'Social stat tracking platform for baseball players',
			description:
				'Took over full development of the native iOS app during 2024-25, adding new features such as comment tagging, profile customization, media upload, in-app advertising, and more. Helped modernize the app by prototyping and implementing UI redesigns, ensuring both the iOS and Android app stayed consistent.',
			link: 'https://apps.apple.com/ca/app/statrat-baseball/id506977885',
			videoEmbed: 'https://www.youtube.com/embed/XTtXMZCfENw',
			imageLight: '/projects/statrat_app.webp',
			imageDark: '/projects/statrat_app.webp',
			imageWidth: 1350,
			imageHeight: 2760,
			tags: ['SwiftUI', 'Swift']
		},
		{
			slug: 'statrat-dashboard',
			title: 'Statrat Advertiser Dashboard',
			headline: 'Manage ad campaigns to run within the app',
			description:
				"Web app built from scratch giving customers a dashboard for creating ad campaigns to run within the Statrat mobile app. Customers can customize their campaign and get an analytics breakdown on it's performance. Ads are generated as HTML templates allowing for easy embedding in both iOS and Android.",
			link: 'https://dashboard.statratapp.com',
			videoEmbed: 'https://www.youtube.com/embed/vhUt21N1vYA',
			imageLight: '/projects/statrat_dashboard.webp',
			imageDark: '/projects/statrat_dashboard_dark.webp',
			imageWidth: 3248,
			imageHeight: 1972,
			tags: ['React', 'Vite', 'TypeScript', 'HTML']
		}
	];
}
