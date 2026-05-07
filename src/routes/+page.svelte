<script lang="ts">
	import VideoModal from '$lib/VideoModal.svelte';
	import { about, getProjects, jobs, site, type Project } from '$lib/data';

	const nav = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' }
	] as const;

	const year = new Date().getFullYear();
	const projects = getProjects(year);

	let navScrolled = $state(false);
	let videoOpen = $state<{ src: string; title: string } | null>(null);
	let activeProject = $state<string | null>(projects[0]?.slug ?? null);

	function scrollToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function openVideo(p: Project) {
		videoOpen = { src: p.videoEmbed, title: p.title };
	}

	$effect(() => {
		if (typeof window === 'undefined') return;
		const onScroll = () => {
			navScrolled = window.scrollY > 24;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const selectedProject = $derived(projects.find((p) => p.slug === activeProject) ?? projects[0]);
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-out border-b {navScrolled
		? 'border-stone-800/80 bg-stone-950/75 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl'
		: 'border-stone-950'}"
>
	<div
		class="mx-auto flex max-w-5xl px-5 py-4 transition-[padding] duration-300 justify-between md:px-8"
	>
		<button type="button" onclick={() => scrollToSection('top')} class="text-left group">
			<span class="block font-serif text-2xl tracking-tight text-stone-50 transition group-hover:text-cyan-200/95 md:text-[1.65rem]">
				{site.name}
			</span>
			<span class="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">{site.title}</span>
		</button>
		<nav class="flex flex-wrap items-center gap-x-5 justify-end max-sm:opacity-0" aria-label="Page sections">
			{#each nav as item}
				<button
					type="button"
					class="text-sm font-medium text-stone-400 transition hover:text-cyan-200/95"
					onclick={() => scrollToSection(item.id)}
				>
					{item.label}
				</button>
			{/each}
		</nav>
	</div>
</header>

<main id="top" class="mx-auto max-w-5xl px-5 pb-14 pt-28 md:px-8 md:pt-32">
	<section class="mb-20" aria-label="Introduction">
		<p
			class="mb-6 max-w-2xl font-serif text-4xl tracking-tight text-stone-100 md:text-5xl md:leading-[1.1]"
		>
			Building thoughtful software
			<span class="text-cyan-400/90">across mobile & web.</span>
		</p>
		<p class="mb-10 max-w-xl text-lg text-stone-400">
			I care about clear product experiences and code that stays maintainable as products grow.
		</p>
		<div class="flex flex-wrap items-center gap-4">
			<a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" class="link-base link-bordered">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
				LinkedIn
			</a>
			<a href={site.links.github} target="_blank" rel="noopener noreferrer" class="link-base link-bordered">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/>
				</svg>
				GitHub
			</a>
			<a
				href="mailto:{site.email}"
				class="link-base"
			>
				<svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				{site.email}
			</a>
		</div>
	</section>

	<section id="about" class="mb-20 scroll-mt-28">
		<h2 class="mb-5 font-serif text-2xl text-stone-100 md:text-3xl">About</h2>
		<p class="max-w-2xl text-lg leading-[1.75] text-stone-400">
			{about}
		</p>
	</section>

	<section id="experience" class="mb-20 scroll-mt-28">
		<h2 class="mb-8 font-serif text-2xl text-stone-100 md:text-3xl">Experience</h2>
		<div class="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-linear-to-b before:from-cyan-600/50 before:via-stone-700 before:to-transparent md:before:left-3">
			{#each jobs as job}
				<article
					class="relative rounded-2xl border border-stone-800/90 bg-stone-900/40 p-6 pl-8 transition hover:border-stone-700 hover:bg-stone-900/55 md:pl-10"
				>
					<div
						class="absolute top-8 left-0 h-2 w-2 translate-x-[-5px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)] md:-translate-x-[3px] md:scale-125"
						aria-hidden="true"
					></div>
					<a
						href={job.link}
						target="_blank"
						rel="noopener noreferrer"
						class="group mb-4 inline-flex flex-wrap items-baseline gap-x-2 gap-y-1"
					>
						<h3 class="text-lg font-semibold text-stone-100 transition group-hover:text-cyan-200/95">
							{job.role}
						</h3>
						<span class="text-stone-500">·</span>
						<span class="text-lg text-stone-300 transition group-hover:text-cyan-200/95">{job.company}</span>
						<svg
							class="ml-1 inline h-3.5 w-3.5 translate-y-px text-stone-600 transition group-hover:text-cyan-200/95"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
					<p class="mb-4 text-sm font-medium text-stone-500">{job.period}</p>
					<ul class="mb-5 space-y-2.5 text-stone-400">
						{#each job.bullets as bullet}
							<li class="flex gap-3 text-[15px] leading-relaxed">
								<span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-500/70" aria-hidden="true"></span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
					<ul class="flex flex-wrap gap-2">
						{#each job.tags as tag}
							<li class="tag">
								{tag}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</section>

	<section id="projects" class="scroll-mt-28">
		<h2 class="mb-8 font-serif text-2xl text-stone-100 md:text-3xl">Projects</h2>
		<div class="flex flex-col gap-4 lg:flex-row lg:items-start">
			<div class="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:w-52 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
				{#each projects as p}
					<button
						type="button"
						class="flex min-w-[200px] flex-col items-start rounded-xl border px-4 py-3 text-left transition lg:min-w-0 lg:w-full {activeProject ===
						p.slug
							? 'border-cyan-700/40 bg-stone-900/70 shadow-[0_0_0_1px_rgba(34,211,238,0.12)]'
							: 'border-stone-800 bg-stone-900/30 hover:border-stone-700'}"
						onclick={() => (activeProject = p.slug)}
					>
						<span class="font-medium text-stone-200">{p.title}</span>
						<span class="mt-0.5 line-clamp-2 text-xs text-stone-500">{p.headline}</span>
					</button>
				{/each}
			</div>

			{#if selectedProject}
				<article
					class="min-w-0 flex-1 overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/35 shadow-xl shadow-black/20"
				>
					<div class="flex flex-col lg:flex-row">
						<div class="relative aspect-4/3 w-full overflow-hidden lg:aspect-auto lg:w-[52%] lg:min-h-[320px]">
							<picture>
								<source srcset={selectedProject.imageDark} media="(prefers-color-scheme: dark)" />
								<img
									src={selectedProject.imageLight}
									alt=""
									class="h-full w-full object-cover object-top"
								/>
							</picture>
							<div
								class="pointer-events-none absolute inset-0 bg-linear-to-t from-stone-950/40 via-transparent to-transparent lg:bg-linear-to-r"
								aria-hidden="true"
							></div>
						</div>
						<div class="flex flex-1 flex-col justify-start gap-5 p-6 md:p-8">
							<div>
								<a
									href={selectedProject.link}
									target="_blank"
									rel="noopener noreferrer"
									class="group inline-flex items-center gap-2"
								>
									<h3 class="font-serif text-2xl text-stone-50 transition group-hover:text-cyan-200/95">
										{selectedProject.title}
									</h3>
									<svg
										class="h-4 w-4 text-stone-500 transition group-hover:text-cyan-200/95"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
								<p class="mt-1 text-sm font-medium text-cyan-500/80">{selectedProject.headline}</p>
							</div>
							<p class="text-[15px] leading-relaxed text-stone-400">{selectedProject.description}</p>
							<ul class="flex flex-wrap gap-2">
								{#each selectedProject.tags as tag}
									<li class="tag">
										{tag}
									</li>
								{/each}
							</ul>
							<button
								type="button"
								class="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-500/80 px-4 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-cyan-400 hover:cursor-pointer"
								onclick={() => openVideo(selectedProject)}
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M8 5v14l11-7z" />
								</svg>
								Watch demo
							</button>
						</div>
					</div>
				</article>
			{/if}
		</div>
	</section>
</main>

<footer class="border-t border-stone-800/80 py-12 text-center">
	<p class="text-sm text-stone-600">
		© {year}
		{site.name}. Built with SvelteKit & Tailwind CSS.
	</p>
</footer>

{#if videoOpen}
	<VideoModal src={videoOpen.src} title={videoOpen.title} onclose={() => (videoOpen = null)} />
{/if}

<style>
	.no-scrollbar {
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
