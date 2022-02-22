<script lang="ts">
	export let name: string;
	export let description: string;
	export let repo: string;
	export let demo: string;
</script>

<main>
	<h4>{name}</h4>
	<p>{description}</p>
	<div class="links">
		<a href={demo}>Demo</a>
		<a href={repo}>Github</a>
	</div>
</main>

<style lang="postcss">
	main {
		@apply p-4 flex flex-col gap-4 bg-blue-900 rounded-md md:w-[25rem];
	}
	h4 {
		@apply text-lg font-semibold text-gray-200;
	}
	p {
		@apply text-gray-300 font-normal text-sm;
	}
	.links {
		@apply flex flex-row items-center justify-evenly;
	}
	.links a {
		@apply text-white text-sm px-10 py-3 rounded-lg bg-gray-500;
	}
</style>
