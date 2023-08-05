<script lang="ts">
	import { Javascript, ExpressJs, Go, Html, Css, NodeJs, Sass, Svelte, Tailwind } from '$lib/components/common/icons';
</script>

<div
	id="skills"
	class="about-me hero min-h-screen bg-base-100 dark:bg-neutral dark:text-neutral-content"
>
	<div class="hero-content max-w-4xl w-full flex justify-start">
		<div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
			<div>
				<h1 class="text-neutral text-7xl md:text-8xl font-bold dark:text-white">Skills</h1>
				<p class="mt-2 text-sm tracking-wide md:text-base max-w-lg">
					The programming languages, tech stacks, and tools <span class="md:hidden"
						>listed below</span
					> are things that I have learned and mastered over the years of my self-guided learning journey.
					I am constantly seeking out new opportunities to learn and improve my skills, and I am proud
					of the diverse range of technologies that I have mastered.
				</p>
			</div>
			<div class="grid grid-cols-4 grid-rows-3 self-center skills mt-4 gap-4">
				<Css />
				<ExpressJs />
				<Go />
				<Html />
				<Javascript />
				<NodeJs />
				<Sass />
				<Svelte />
				<Tailwind />
			</div>
		</div>
	</div>
</div>
