<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<main {id}>
	<h2>{title}</h2>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply bg-gray-400 h-full md:h-screen p-4 md:flex md:flex-col md:items-center md:justify-center dark:bg-gray-900 py-10;
	}
	h2 {
		@apply font-bold text-4xl text-gray-700 dark:text-gray-100 py-6;
	}
</style>
