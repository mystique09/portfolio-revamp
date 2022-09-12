<script lang="ts">
	import ProjectCard from './project_card.svelte';
	import { projectList, type Project } from '$lib/constants';
	import Container from './container.svelte';

	let tag = 'all';

	const filterProjects = (tag: string): Project[] => {
		if (tag === 'all') return projectList;
		return projectList.filter((p) => p.tags.includes(tag));
	};

	const handleClick = (e) => {
		tag = e.currentTarget.getAttribute('id');
	};
</script>

<Container id="projects" title="Projects">
	<div class="gap-4 mb-12 flex flex-wrap items-center justify-center">
		<button
			id="all"
			type="button"
			on:click={handleClick}
			class="py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent">All</button
		>
		<button
			id="Go"
			type="button"
			on:click={handleClick}
			class="py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent">Go</button
		>
		<button
			id="Rust"
			type="button"
			on:click={handleClick}
			class="py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent">Rust</button
		>
		<button
			id="Web"
			type="button"
			on:click={handleClick}
			class="py-2 hover:scale-120 border-none rounded px-10 bg-gray-100 text-accent">Web</button
		>
	</div>
	<div class="projects md:flex-row md:flex-wrap md:items-center md:m-auto md:justify-center">
		{#each filterProjects(tag) as project}
			<ProjectCard
				name={project.name}
				description={project.description}
				repo={project.repo}
				demo={project.demo}
			/>
		{/each}
	</div>
</Container>

<style>
	.projects {
		@apply flex flex-col gap-4 max-w-6xl;
	}
</style>
