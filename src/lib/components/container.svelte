<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<main class="h-auto md:flex md:flex-col md:items-center md:justify-center dark:bg-gray-900" {id}>
	<h2 class="dark:text-gray-100">{title}</h2>
	<slot />
</main>

<style>
	main {
		@apply bg-gray-300 h-full p-4 py-10;
	}
	h2 {
		@apply font-bold text-4xl text-gray-700 py-6;
	}
</style>
