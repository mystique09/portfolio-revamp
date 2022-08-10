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
				'Discord manager bot, can manage server roles, ban, kick, greet and automatically add Roles for new members. (under development)',
			repo: getRepo('void'),
			demo: getRepo('void')
		},
		{
			name: 'Github Status',
			description:
				'Github status for your README.md Made with [Go, Echo, Entgo, Postgresql]. (under development)',
			repo: getRepo('gh-status'),
			demo: 'https://profile-status.herokuapp.com'
		},
		{
			name: 'The tree command clone, made with Rust.',
			description: 'I made this cli so that I can see the content of a directory in a tree format.',
			repo: getRepo('lls'),
			demo: getRepo('lls')
		},
		{
			name: 'Brainf*ck interpreter, made with Rust.',
			description: 'A basic brainf*ck interpreter made with rust.',
			repo: getRepo('brainfck'),
			demo: getRepo('brainfck')
		},
		{
			name: 'Inventory System (frontend)',
			description:
				'My first not so big personal project an Inventory system, can manage products, create, read, update, and delete(CRUD). Requires authentication to use the system. Stack: [Sveltekit, TailwindCSS] (under development)',
			repo: getRepo('inventory-system'),
			demo: getRepo('inventory-system')
		},
		{
			name: 'Inventory System (backend)',
			description: 'Inventory System backend. Stack: [Go, Echo, Gorm]',
			repo: getRepo('inventory-system-go'),
			demo: getRepo('inventory-system-go')
		},
		{
			name: 'Confessit (frontend)',
			description: 'Sayout clone, made with: [Sveltekit, Go, Postgresql, Gorm, Echo]',
			repo: getRepo('confessit'),
			demo: 'https://confessit.vercel.app'
		},
		{
			name: 'Confessit (backend)',
			description:
				'The backend of my Sayout clone, made with: [Sveltekit, Go, Postgresql, Gorm, Echo]',
			repo: getRepo('confessit-backend'),
			demo: 'https://confessit.vercel.app'
		},
		{
			name: 'Class Management (frontend)',
			description:
				'My first big personal project an Inventory system, can manage products, create, read, update, and delete(CRUD). Requires authentication to use the system. Stack: [Sveltekit, TailwindCSS] (under development)',
			repo: getRepo('class-manager'),
			demo: 'https://class-management.vercel.app'
		},
		{
			name: 'Class Management (backend)',
			description: 'The backend of Class Management. Stack: [Go, Echo] (under development)',
			repo: getRepo('class-manager-backend'),
			demo: 'https://class-management.vercel.app'
		},
		{
			name: 'Codegram (frontend)',
			description:
				'A simple social media website, can do CRUD operations. Stack: [NextJS, TailwindCSS] (under development)',
			repo: getRepo('codegram'),
			demo: getRepo('codegram')
		},
		{
			name: 'Codegram (backend)',
			description: 'Backend for my Codegram website. Stack: [Go, EntGo, Echo] (under development)',
			repo: getRepo('codegram-go'),
			demo: getRepo('codegram-go')
		},
		{
			name: 'To-Do in Golang (backend)',
			description:
				'Backend for my To-Do website. Stack: [Go(net/http), Gorm, Echo] (under development)',
			repo: getRepo('todo-go'),
			demo: getRepo('todo-go')
		},
		{
			name: 'Portfolio v1',
			description: 'My first portfolio website made from scratch. Stack: [Scss, Js, Html5]',
			repo: getRepo('portfolio-scratch'),
			demo: 'https://benjiev1.vercel.app/'
		},
		{
			name: 'Portfolio v2',
			description: 'My second portfolio website made from scratch. Stack: [Scss, Typescript, Vite]',
			repo: getRepo('portfolio'),
			demo: 'https://benjieben.tk/'
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
