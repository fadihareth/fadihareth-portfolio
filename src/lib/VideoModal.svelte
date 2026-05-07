<script lang="ts">
	import { onMount } from 'svelte';

	let { src, title, onclose }: { src: string; title: string; onclose: () => void } = $props();

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}

	onMount(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prev;
		};
	});
</script>

<svelte:window onkeydown={onkeydown} />

<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
<div
	class="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/85 p-4 backdrop-blur-md"
	onclick={(e) => e.target === e.currentTarget && onclose()}
	role="presentation"
>
	<div
		class="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-stone-700/80 bg-stone-900 shadow-2xl shadow-cyan-950/40"
		role="dialog"
		aria-modal="true"
		aria-label="Video demo"
	>
		<div class="flex items-center justify-between border-b border-stone-800 px-4 py-3">
			<p class="truncate text-sm font-medium text-stone-300">{title}</p>
			<button
				type="button"
				class="rounded-lg p-2 text-stone-400 transition hover:bg-stone-800 hover:text-stone-100"
				onclick={onclose}
				aria-label="Close video"
			>
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
		<div class="aspect-video w-full bg-black">
			<iframe
				class="h-full w-full"
				src={src}
				title={`${title} demo`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</div>
	</div>
</div>
