<script lang="ts">
	import ProjectCard from './project_card.svelte';
	import { projectList } from '$lib/constants';
</script>

<div
	id="projects"
	class="projects hero min-h-screen bg-base-100 dark:bg-neutral dark:text-neutral-content"
>
	<div class="hero-content max-w-4xl w-full flex justify-start">
		<div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
			<div>
				<h1 class="text-neutral text-7xl md:text-8xl font-bold mb-2 dark:text-neutral-content">
					Projects
				</h1>
				<p class="text-base mt-4 tracking-wide max-w-lg md:text-lg">
					This is a list of some of my personal projects, which I have undertaken in order to learn
					new skills, test out new ideas, and challenge myself as a programmer. These projects are a
					reflection of my passion for technology and my dedication to constantly improving my
					skills. Some of the projects on this list are small and focused on a specific task or
					problem, while others are larger and more complex. All of these projects, however, have
					given me the opportunity to learn and grow as a programmer, and I am proud of the work
					that I have accomplished. <br />
				</p>
			</div>
			<div>
				<div>
					<div class="h-96 carousel carousel-vertical rounded-box">
						{#each projectList as project (project.id)}
							<div id={`project-${project.id}`} class="carousel-item my-2 w-full">
								<ProjectCard
									name={project.name}
									description={project.description}
									repo={project.repo}
									demo={project.demo}
									tags={project.tags}
								/>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
