<script lang="ts">
	import ProjectCard from './project_card.svelte';

	interface Project {
		name: string;
		description: string;
		repo: string;
		demo: string;
	}

	function getRepo(repo_name: string) {
		return `https://github.com/mystique09/${repo_name}`;
	}

	let projects: Array<Project> = [
		{
			name: 'Discord Bot',
			description:
				'Discord manager bot, can manage server roles, ban, kick, greet and automatically add Roles for new members. (still in development)',
			repo: getRepo('void-bot-manager'),
			demo: 'testrepolink'
		},
		{
			name: 'Inventory System (frontend)',
			description:
				'My first not so big personal project an Inventory system, can manage products, create, read, update, and delete(CRUD). Requires authentication to use the system. Stack: [Sveltekit, TailwindCSS] (still in development)',
			repo: getRepo('inventory-system'),
			demo: 'testrepolink'
		},
		{
			name: 'Inventory System (backend)',
			description: 'Inventory System backend. Stack: [Go, Echo, Gorm]',
			repo: getRepo('inventory-system-go'),
			demo: 'testrepolink'
		},
		{
			name: 'Codegram (frontend)',
			description:
				'A social media-sh website, can do CRUD operations. Stack: [NextJS, TailwindCSS] (still in development)',
			repo: getRepo('codegram'),
			demo: 'testrepolink'
		},
		{
			name: 'Codegram (backend)',
			description:
				'Backend for my Codegram website. Stack: [Go, EntGo, Echo] (still in development)',
			repo: getRepo('codegram-go'),
			demo: 'testrepolink'
		},

		{
			name: 'Portfolio v1',
			description: 'My first portfolio website made from scratch. Stack: [Scss, Js, Html5]',
			repo: getRepo('portfolio-scratch'),
			demo: 'testrepolink'
		},
		{
			name: 'Portfolio v2',
			description: 'My second portfolio website made from scratch. Stack: [Scss, Typescript, Vite]',
			repo: getRepo('portfolio'),
			demo: 'https://benjieben.tk'
		},
		{
			name: 'Portfolio v3',
			description:
				'My third portfolio website made with Sveltekit and TailwindCSS. Stack: [Sveltekit, Typescript, TailwindCSS]',
			repo: getRepo('portfolio-revamp'),
			demo: 'https://benjieben-garcia.vercel.app'
		},
		{
			name: 'Spotify Clone',
			description: 'Spotify clone website. Stack: [Svelte, TailwindCSS]',
			repo: getRepo('musify'),
			demo: 'https://musify-puce.vercel.app'
		},
		{
			name: 'Crypto Status',
			description: 'Crypto Status viewer (not realtime). Stack: [Svelte, TailwindCSS]',
			repo: getRepo('crypto_status'),
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
		@apply bg-gray-400 h-full md:h-screen p-4 md:flex md:flex-col md:items-center md:justify-center dark:bg-gray-900 py-10;
	}
	h2 {
		@apply font-bold text-4xl text-gray-700 dark:text-gray-100 py-6;
	}
	.projects {
		@apply flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:m-auto md:justify-center max-w-6xl;
	}
</style>
