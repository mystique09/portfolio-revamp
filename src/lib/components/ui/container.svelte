<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		id: string;
		title: string;
		children: Snippet;
	}

	let { id, title, children, ...rest } = $props<Props>();
</script>

<main {...rest} {id}>
	<h2 class="">{title}</h2>
	{#if children}
		{@render children()}
	{/if}
</main>
