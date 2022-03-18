<main id="about-me">
	<div class="img">
		<img src="./undraw_programming_re_kg9v.svg" alt="Person avatar" />
	</div>
	<div class="content">
		<h2>About Me</h2>
		<p>
			I am a self-taught programmer from PH, currently learning Go for the backend and Svelte for
			the frontend, and I also have an interest in learning Rust.
		</p>
		<div class="social">
			<a href="https://github.com/mystique09">Github</a>
			<a href="https://www.linkedin.com/in/benjie-ben-garcia-916261202">LinkedIn</a>
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		@apply h-screen pt-12 flex flex-col gap-4 bg-gray-400 text-gray-200 px-2 py-12 md:flex-row md:items-center md:m-auto dark:bg-gray-800 md:justify-center;
	}
	.img {
		@apply max-w-2xl md:w-1/2;
	}
	/*img {
		@apply h-full w-full;
	}*/
	.content {
		@apply flex flex-col items-start gap-3 mt-4 max-w-md py-12;
	}
	.content h2 {
		@apply font-bold text-gray-900 text-4xl dark:text-gray-100;
	}
	.content p {
		@apply font-light text-sm md:text-base text-gray-700 dark:text-gray-300;
	}
	.social {
		@apply flex flex-row items-center justify-around gap-4 w-full p-5 mt-4;
	}
	.social a {
		@apply px-12 py-3 bg-accent rounded-xl font-light dark:text-gray-300;
	}
</style>
