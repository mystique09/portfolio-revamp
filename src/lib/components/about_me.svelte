<main id="about-me"
>
<div class="wrap">
	<div class="img-wrapper">
		<img height="10" width="10" src="./undraw_programming_re_kg9v.svg" alt="Person avatar" />
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
		@apply w-full text-black px-2 py-4 gap-4;
		@apply md\:h-screen md\:flex md\:items-center md\:justify-center;
	}
	.wrap {
		@apply md\:flex md\:flex-row items-center justify-around max-w-4xl m-auto;
		@apply sm\:flex sm\:flex-column;
	}
	.img-wrapper {
		@apply h-full w-[100%];
	}
	img {
		@apply max-w-md h-full w-[100%];
	}
	.content {
		@apply flex flex-col items-start gap-3 mt-4;
		@apply sm\:flex-col sm\:flex sm\:items-center sm\:justify-between max-w-md;
	}
	.content h2 {
		@apply font-bold text-gray-900 text-4xl;
	}
	.content p {
		@apply font-light text-sm text-gray-700;
	}
	.social {
		@apply flex flex-row items-center justify-around gap-4 w-full p-5 mt-4;
		@apply max-w-md;
	}
	.social a {
		@apply shadow-sm shadow-accent/70 px-12 py-3 text-black bg-white rounded-md font-light text-sm;
	}
</style>
