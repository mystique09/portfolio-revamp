<script lang="ts">
	let skills: string[] = [
		'go developer',
		'typescript',
		'proficient in javascript',
		'a backend developer',
		'self-taught'
	];
	let i = 0;

	setInterval(() => (i = (i + 1) % skills.length), 3000);

	$: currentSkill = skills[i];
</script>

<main id="#" class="hero min-h-screen bg-base-100 dark:bg-neutral dark:text-neutral-content">
	<div class="hero-content max-w-4xl w-full flex justify-start">
		<div class="max-w-4xl">
			<p class="text-xs mt-1 font-thin badge badge-primary dark:badge-secondary">{currentSkill}</p>
			<h1 class="text-7xl md:text-8xl font-bold text-base-content dark:text-white">
				Benjie Ben Garcia
			</h1>
			<p class="mt-4 text-sm md:text-base max-w-xl tracking-wide">
				Hello and welcome to my portfolio. I am excited to share with you some of my past projects
				and accomplishments as a programmer. As you browse through my portfolio, I hope you will get
				a sense of my passion for technology and my dedication to constantly learning and improving
				my skills. Thank you for visiting my portfolio and I hope you enjoy what you see.
			</p>
			<div class="socials" />
		</div>
	</div>
</main>
