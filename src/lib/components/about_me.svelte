<main
	id="about-me"
	class="flex items-center dark:text-gray-300 bg-gray-300 dark:bg-gray-900"
>
<div class="p-4 flex flex-col md:flex-row m-auto items-center justify-around max-w-6xl gap-2">
	<div class="max-w-md md:w-full md:h-full sm:h-1/2 sm:w-1/2">
		<img src="./undraw_programming_re_kg9v.svg" alt="Person avatar" />
	</div>
	<div class="content">
		<h2 class="dark:text-gray-100">About Me</h2>
		<p class="md:text-base dark:text-gray-300 max-w-md">
			I am a self-taught programmer from PH, currently learning Go for the backend and Svelte for
			the frontend, and I also have an interest in learning Rust.
		</p>
		<div class="social">
			<a class="dark:bg-accent dark:text-white" href="https://github.com/mystique09">Github</a>
			<a href="https://www.linkedin.com/in/benjie-ben-garcia-916261202">LinkedIn</a>
		</div>
	</div>
</div>
</main>

<style>
	main {
		@apply text-black p-2 py-4 h-[100vh] justify-end items-center gap-4;
	}
	img {
		@apply max-w-md max-h-md h-full w-full;
	}
	.content {
		@apply flex flex-col items-start gap-3 mt-4 py-12;
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
