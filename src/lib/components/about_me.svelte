<main
	id="about-me"
	class="md:flex-row md:items-center md:m-auto dark:bg-gray-900 md:justify-center"
>
	<div class="img md:w-1/2">
		<img src="./undraw_programming_re_kg9v.svg" alt="Person avatar" />
	</div>
	<div class="content">
		<h2 class="dark:text-gray-100">About Me</h2>
		<p class="md:text-base dark:text-gray-300">
			I am a self-taught programmer from PH, currently learning Go for the backend and Svelte for
			the frontend, and I also have an interest in learning Rust.
		</p>
		<div class="social">
			<a class="dark:bg-accent dark:text-white" href="https://github.com/mystique09">Github</a>
			<a href="https://www.linkedin.com/in/benjie-ben-garcia-916261202">LinkedIn</a>
		</div>
	</div>
</main>

<style>
	main {
		@apply h-screen pt-12 flex flex-col gap-4 bg-gray-300 text-black px-2 py-12;
	}
	.img {
		@apply mt-16 max-w-2xl;
	}
	img {
		@apply h-full w-full;
	}
	.content {
		@apply flex flex-col items-start gap-3 mt-4 max-w-md py-12;
	}
	.content h2 {
		@apply font-bold text-gray-900 text-4xl;
	}
	.content p {
		@apply font-light text-sm text-gray-700;
	}
	.social {
		@apply flex flex-row items-center justify-around gap-4 w-full p-5 mt-4;
	}
	.social a {
		@apply shadow-sm shadow-accent/70 px-12 py-3 text-black bg-white rounded-md font-light text-sm;
	}
</style>
