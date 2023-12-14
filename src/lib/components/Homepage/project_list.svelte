<script lang="ts">
	interface Props {
		name: string;
		description: string;
		repo: string;
		demo: string;
		tags: string[];
	}
	
	import { projectList } from '$lib/constants';
</script>

<div
	id="projects"
	class="projects hero min-h-screen bg-base-100 dark:bg-neutral dark:text-neutral-content"
>
	<div class="hero-content max-w-4xl w-full flex justify-start">
		<div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
			<div>
				<h1 class="text-neutral text-7xl md:text-8xl font-bold mb-2 dark:text-white">Projects</h1>
				<p class="text-sm mt-4 tracking-wide max-w-lg md:text-base">
					This is a list of some of my personal projects, which I have undertaken in order to learn
					new skills, test out new ideas, and challenge myself as a programmer. These projects are a
					reflection of my passion for technology and my dedication to constantly improving my
					skills. Some of the projects on this list are small and focused on a specific task or
					problem, while others are larger and more complex. All of these projects, however, have
					given me the opportunity to learn and grow as a programmer, and I am proud of the work
					that I have accomplished. <br />
				</p>
			</div>
			<div class="self-center">
				<div>
					<div class="h-96 carousel carousel-vertical rounded-box">
						{#each projectList as project (project.id)}
							<div id={`project-${project.id}`} class="carousel-item my-2 w-full">
								<!-- <ProjectCard
									name={project.name}
									description={project.description}
									repo={project.repo}
									demo={project.demo}
									tags={project.tags}
								/> -->

								{@render ProjectCard({name: project.name, description: project.description, repo: project.repo, demo: project.demo, tags: project.tags})}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#snippet ProjectCard({name, description, demo, repo, tags}: Props)}
	<div
	class="h-auto md:h-full card card-side bg-neutral text-neutral-content shadow-xl max-w-sm dark:bg-base-100 dark:text-base-content"
>
	<div class="card-body">
		<div class="card-title">
			<h1 class="mt-2 text-white dark:text-neutral">{name}</h1>
			<div class="badges absolute top-0 right-0 flex flex-row p-3 gap-1">
				{#each tags as tag}
					<div class="badge badge-primary dark:badge-secondary">{tag}</div>
				{/each}
			</div>
		</div>
		<p class="text-sm text-white dark:text-neutral">{description}</p>
		<div class="card-actions justify-end mt-2">
			<a
				class="btn btn-sm btn-primary dark:btn-secondary normal-case"
				target="_blank"
				rel="noreferrer"
				href={repo}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4 mr-1"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
					/>
				</svg>
				<span>Github</span>
			</a>
			{#if !!demo}
				<a
					class="btn btn-sm btn-primary dark:btn-secondary normal-case"
					target="_blank"
					rel="noreferrer"
					href={demo}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4 mr-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
						/>
					</svg>
					<span>Demo</span>
				</a>
			{/if}
		</div>
	</div>
</div>
{/snippet}