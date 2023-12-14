<script context="module" lang="ts">
	const mainStyle = css({bg: "neutral.100", w: "4rem", h: "4rem", rounded: "lg", display: "flex", alignItems: "center", justifyContent: "center", p: '2'});
</script>

<script lang="ts">
	import { css } from 'styled-system/css';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children } = $props<Props>();
</script>

<main class={mainStyle} >
	{#if children}
		{@render children()}
	{/if}
</main>