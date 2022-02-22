<script lang="ts">
	import BtnIcon from 'carbon-icons-svelte/lib/Information24';
	import AboutMe from '$lib/components/about_me.svelte';
	import ProjectList from '$lib/components/project_list.svelte';
</script>

<svelte:head>
	<title>Benjie Ben Garcia - Portfolio</title>
</svelte:head>

<main>
	<div class="intro">
		<p>Hello, I am</p>
		<h2>Benjie Ben Garcia</h2>
		<p>A self-taught programmer</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illum. Suscipit quis iste, nihil dolore non nemo id repudiandae odio, sunt voluptas ad aspernatur magni possimus ducimus, magnam eligendi excepturi.</p>
		<a class="btn" href="#about-me">
			<BtnIcon />
			<span>About Me</span>
		</a>
	</div>
	<div class="img">
		<img src="./undraw_welcome.svg" alt="Welcome Avatar">
	</div>
</main>
<AboutMe />
<ProjectList />

<style lang="postcss">
	main {
		@apply p-2 h-full flex flex-col-reverse justify-end gap-4 dark:bg-blue-400 md:flex-row-reverse md:items-center md:max-w-6xl md:m-auto;
	}
	.intro {
		@apply flex flex-col gap-1 items-start justify-evenly md:w-1/2;
	}
	p:nth-child(3) {
		@apply text-base;
	}
	p:nth-child(4) {
		@apply font-normal mt-4 text-lg;
	}
	p {
		@apply font-light text-xl;
	}
	.img {
		@apply bg-gray-200 max-w-2xl md:w-1/2;
	}
	h2 {
		@apply font-bold text-3xl;
	}
	.btn {
		@apply text-gray-200 py-2 text-center flex items-center justify-center gap-4 bg-blue-600 m-auto w-72 h-16 rounded-lg mt-4;
	}
	.btn span {
		@apply font-semibold text-lg;
	}
</style>

