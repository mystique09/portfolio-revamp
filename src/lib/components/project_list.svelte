<script lang="ts">
	import ProjectCard from './project_card.svelte';
	import { projectList, type Project } from '$lib/constants';

	let tag = 'all';

	const filterProjects = (tag: string): Project[] => {
		if (tag === 'all') return projectList;
		return projectList.filter((p) => p.tags.includes(tag));
	};

	const handleClick = (e) => {
		tag = e.currentTarget.getAttribute('id');
	};
</script>

<main class="h-auto bg-gray-300 flex flex-col items-center justify-center dark:bg-gray-900" id="projects">
	<h2 class="dark:text-gray-100">Projects</h2>
	<div class="gap-4 mb-12 flex flex-wrap items-center justify-center">
		<button
			id="all"
			type="button"
			on:click={handleClick}
			class="duration-300 py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent"
			>All</button
		>
		<button
			id="Go"
			type="button"
			on:click={handleClick}
			class="duration-300 py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent"
			>Go</button
		>
		<button
			id="Rust"
			type="button"
			on:click={handleClick}
			class="duration-300 py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent"
			>Rust</button
		>
		<button
			id="Web"
			type="button"
			on:click={handleClick}
			class="duration-300 py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent"
			>Web</button
		>
	</div>
	<div class="projects">
		{#each filterProjects(tag) as project}
			<ProjectCard
				name={project.name}
				description={project.description}
				repo={project.repo}
				demo={project.demo}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		@apply h-full p-4 py-10;
	}
	h2 {
		@apply font-bold text-4xl text-gray-700 py-6;
	}
	.projects {
		@apply w-full flex flex-row flex-wrap items-center justify-center gap-4 max-w-6xl;
	}
</style>
