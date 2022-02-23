<main id="about-me">
	<div class="img">
		<img src="./undraw_programming_re_kg9v.svg" alt="Person avatar" />
	</div>
	<div class="content">
		<h2>About Me</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique, explicabo numquam
			obcaecati deleniti iusto facere optio harum quo possimus. Pariatur aliquid vitae dignissimos
			soluta laborum neque cupiditate repudiandae vel.
		</p>
		<div class="social">
			<a href="https://github.com/mystique09">Github</a>
			<a href="https://linkedin.com/benjiebengarcia">LinkedIn</a>
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		@apply h-screen flex flex-col gap-4 bg-blue-900 text-gray-200 px-2 py-12 md:flex-row md:items-center md:m-auto dark:bg-gray-800 md:justify-center;
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
		@apply font-bold text-white text-4xl;
	}
	.content p {
		@apply font-light text-base text-gray-300;
	}
	.social {
		@apply flex flex-row items-center justify-around gap-4 w-full p-5 mt-4;
	}
	.social a {
		@apply px-12 py-3 bg-gray-600 rounded-xl font-light dark:bg-blue-600 dark:text-gray-300;
	}
</style>
