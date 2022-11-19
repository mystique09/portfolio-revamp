<script lang="ts">
	import ProjectCard from './project_card.svelte';
	import { projectList, type Project } from '$lib/constants';

	let tag = "all";

	// let carouselHeight: number;
	// $: console.log(carouselHeight)
</script>

<div id="projects" class="projects hero min-h-screen bg-base-100">
	<div class="hero-content max-w-4xl w-full flex justify-start">
		<div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
			<div>
				<h1 class="text-neutral text-7xl md:text-8xl font-bold mb-2">Projects</h1>
				<p class="text-lg md:text-xl">
					List of my personal projects. <br>
					<span class="badge badge-primary dark:badge-secondary">Frontend</span>
					<span class="badge badge-primary dark:badge-secondary">Backend</span> 
					<span class="badge badge-primary dark:badge-secondary">Bots</span>
					<span class="badge badge-primary dark:badge-secondary">CLI</span> 
				</p>
			</div>
			<div>
				<div>
					<!-- <progress class="progress progress-primary w-full" value="20" max={carouselHeight}></progress> -->
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