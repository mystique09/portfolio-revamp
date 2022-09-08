<script lang="ts">
	import BtnIcon from 'carbon-icons-svelte/lib/ArrowDown24';
</script>

<main id="#">
	<div class="wrap">
		<div class="intro">
			<p>Hello, I am</p>
			<h2>Benjie Ben Garcia</h2>
			<p>A self-taught programmer</p>
			<p>• I am currently learning Go and Rust.</p>
			<a class="btn" href="#about-me">
				<BtnIcon />
				<span>About Me</span>
			</a>
		</div>
		<div class="img">
			<img src="./undraw_welcome.svg" alt="Welcome Avatar" />
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		@apply bg-gray-800 p-2 py-2 h-screen justify-end gap-4 dark:bg-gray-900;
	}
	.wrap {
		@apply h-full flex flex-col-reverse md:flex-row-reverse md:items-center md:justify-center md:m-auto md:max-w-6xl;
	}
	.intro {
		@apply flex flex-col gap-2 md:gap-4 items-start justify-evenly md:w-1/2 dark:text-white;
	}
	p:nth-child(3) {
		@apply text-base dark:text-gray-400;
	}
	p:nth-child(4) {
		@apply font-normal mt-4 text-sm md:text-lg dark:text-gray-300;
	}
	p {
		@apply font-light text-xl;
	}
	.img {
		@apply max-w-2xl md:w-1/2;
	}
	h2 {
		@apply font-bold text-3xl;
	}
	.btn {
		@apply text-gray-200 py-2 text-center flex items-center justify-center gap-2 bg-accent m-auto w-56 h-14 rounded-lg mt-4 dark:text-gray-50;
	}
	.btn span {
		@apply font-normal text-sm;
	}
</style>
