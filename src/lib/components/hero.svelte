<script lang="ts">
	let skills: string[] = ["go developer", "typescript", "proficient in javascript", "a backend developer", "self-taught"];
	let i = 0;

	setInterval(() => i = (i + 1) % skills.length, 3000);

	$: currentSkill = skills[i];
</script>

<main id="#" class="hero min-h-screen bg-base-100">
	<div class="hero-content max-w-4xl w-full flex justify-start">
		<div class="max-w-lg">
			<p class="text-xs mt-1 font-thin badge badge-primary dark:badge-secondary">{currentSkill}</p>
			<h1 class="text-7xl md:text-8xl font-bold text-base-content">Benjie Ben Garcia</h1>
			<p class="mt-2 text-lg md:text-xl">Hey, welcome to my portfolio. Enjoy!</p>
			<div class="socials">
			</div>
		</div>
	</div>
</main>