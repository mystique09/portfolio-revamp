<script lang="ts">
	import BtnIcon from 'carbon-icons-svelte/lib/ArrowDown24';
</script>

<main id="#" class="md:h-full bg-gray-300">
	<div class="h-full p-4 flex flex-col-reverse md:flex-row-reverse m-auto md:items-center sm:items-start justify-around max-w-6xl">
		<div class="intro md:gap-4 md:w-1/2 dark:text-white">
			<p>Hello, I am</p>
			<h2>Benjie Ben Garcia</h2>
			<p class="dark:text-gray-400">A self-taught programmer</p>
			<p class="dark:text-gray-300 md:text-lg">• I am currently learning Go and Rust.</p>
			<a class="btn bg-gray-100 text-black dark:text-white" href="#about-me">
				<BtnIcon
					class="transition-300 animate-bounce-alt fw100 animate-count-infinite animate-duration-1s"
				/>
				<span>About Me</span>
			</a>
		</div>
		<div class="max-w-2xl md:max-w-md sm:w-1/2 sm:h-1/4 md:w-full md:h-full">
			<img width="200" height="200" src="./undraw_welcome.svg" alt="Welcome Avatar" />
		</div>
	</div>
</main>

<style>
	main {
		@apply text-black py-4 justify-end gap-4;
	}
	.intro {
		@apply flex flex-col gap-2 items-start justify-evenly;
	}
	p:nth-child(3) {
		@apply text-base;
	}
	p:nth-child(4) {
		@apply font-normal mt-4 text-sm;
	}
	p {
		@apply font-light text-xl;
	}
	img {
		@apply w-full h-full;
	}
	h2 {
		@apply font-bold text-3xl;
	}
	.btn {
		@apply shadow-md py-2 flex items-center gap-1 justify-center m-auto w-56 h-14 rounded-lg mt-4;
	}
	.btn span {
		@apply font-bold text-sm;
	}
</style>
