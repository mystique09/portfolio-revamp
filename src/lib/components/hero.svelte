<script lang="ts">
	import BtnIcon from 'carbon-icons-svelte/lib/ArrowDown24';
</script>

<main id="#" class="dark:text-gray-300 dark:bg-gray-900">
	<div class="wrap md:flex-row-reverse md:items-center md:justify-center md:m-auto md:max-w-6xl">
		<div class="intro md:gap-4 md:w-1/2 dark:text-white">
			<p>Hello, I am</p>
			<h2>Benjie Ben Garcia</h2>
			<p class="dark:text-gray-400">A self-taught programmer</p>
			<p class="dark:text-gray-300 md:text-lg">• I am currently learning Go and Rust.</p>
			<a class="btn dark:bg-accent dark:text-white" href="#about-me">
				<BtnIcon
					class="transition-300 animate-bounce-alt fw100 animate-count-infinite animate-duration-1s"
				/>
				<span>About Me</span>
			</a>
		</div>
		<div class="img md:w-1/2">
			<img src="./undraw_welcome.svg" alt="Welcome Avatar" />
		</div>
	</div>
</main>

<style>
	main {
		@apply bg-gray-400 text-black p-2 py-2 h-screen justify-end gap-4;
	}
	.wrap {
		@apply h-full flex flex-col-reverse;
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
	.img {
		@apply max-w-2xl w-full;
	}
	img {
		@apply w-full h-full;
	}
	h2 {
		@apply font-bold text-3xl;
	}
	.btn {
		@apply shadow-md py-2 text-center flex items-center justify-center gap-2 bg-white text-black m-auto w-56 h-14 rounded-lg mt-4;
	}
	.btn span {
		@apply font-normal text-sm;
	}
</style>
