<script lang="ts">
	export let name: string;
	export let description: string;
	export let repo: string;
	export let demo: string;
</script>

<main class="dark:bg-primary/80 md:w-[25rem]">
	<h3>{name}</h3>
	<p>{description}</p>
	<div class="links">
		<a class="dark:text-white dark:bg-accent" href={demo}>Demo</a>
		<a href={repo}>Github</a>
	</div>
</main>

<style>
	main {
		@apply p-4 flex flex-col justify-between gap-4 bg-black/78 rounded-md w-full max-w-sm min-h-[15rem];
	}
	h3 {
		@apply text-lg font-semibold text-gray-200;
	}
	p {
		@apply text-left text-gray-300 font-normal text-sm;
	}
	.links {
		@apply flex flex-row items-center justify-evenly;
	}
	.links a {
		@apply text-black text-sm px-8 py-2 rounded-lg bg-white;
	}
</style>
