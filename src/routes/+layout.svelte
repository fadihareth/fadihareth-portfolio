<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Fadi Hareth</title>
</svelte:head>

{@render children()}
