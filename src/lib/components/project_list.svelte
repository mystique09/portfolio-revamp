<script lang="ts">
	import ProjectCard from './project_card.svelte';

	interface Project {
		name: string;
		description: string;
		repo: string;
		demo: string;
	}

	let projects: Array<Project> = [
		{
			name: 'Discord Bot',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit totam voluptate exercitationem minus voluptatem iure eveniet fugiat alias praesentium, a error maxime qui. Voluptates consectetur eos quibusdam quis. Eaque?',
			repo: 'testrepolink',
			demo: 'testrepolink'
		},
		{
			name: 'Inventory System',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit totam voluptate exercitationem minus voluptatem iure eveniet fugiat alias praesentium, a error maxime qui. Voluptates consectetur eos quibusdam quis. Eaque?',
			repo: 'testrepolink',
			demo: 'testrepolink'
		},
		{
			name: 'Codegram',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit totam voluptate exercitationem minus voluptatem iure eveniet fugiat alias praesentium, a error maxime qui. Voluptates consectetur eos quibusdam quis. Eaque?',
			repo: 'testrepolink',
			demo: 'testrepolink'
		},
		{
			name: 'Portfolio v2',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit totam voluptate exercitationem minus voluptatem iure eveniet fugiat alias praesentium, a error maxime qui. Voluptates consectetur eos quibusdam quis. Eaque?',
			repo: 'testrepolink',
			demo: 'testrepolink'
		}
	];
</script>

<main id="projects">
	<h2>Projects</h2>
	<div class="projects">
		{#each projects as project}
			<ProjectCard
				name={project.name}
				description={project.description}
				repo={project.repo}
				demo={project.demo}
			/>
		{/each}
	</div>
</main>

<style lang="postcss">
	main {
		@apply bg-gray-100 h-full p-4 dark:bg-gray-900;
	}
	h2 {
		@apply font-bold text-4xl text-gray-700 dark:text-gray-100;
	}
	.projects {
		@apply flex flex-col gap-4 mt-6 md:flex-row md:flex-wrap md:items-center md:justify-center;
	}
</style>
