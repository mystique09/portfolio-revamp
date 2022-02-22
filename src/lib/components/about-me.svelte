<div class="main">
	<div class="img">
		<img src="./person-avatar.svg" alt="Person sitting in a coputer desk." />
	</div>
	<div class="content">
		<h1>About Me</h1>
		<p>
			orem ipsum dolor, sit amet consectetur adipisicing elit. Quae laudantium tenetur, quos aliquam
			illo, quia perferendis aperiam atque, ipsa voluptatum numquam nesciunt quaerat rem ad cumque
			repellat voluptates id itaque. Sint tenetur sed quas explicabo sit! Ipsa quis nihil sequi
			voluptatum debitis dicta illum numquam, tempora, tenetur earum porro blanditiis consequatur
			doloribus maxime voluptatibus sunt? Cupiditate quia molestias inventore cum?
		</p>
		<div class="btn">
			<a href="#linkedin">LinkedIn</a>
			<a href="#resume">Github</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.main {
		@apply mt-16 h-full justify-end flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:m-auto;
	}
	.img {
		@apply md:w-1/2 bg-gray-200 max-w-2xl;
	}
	.content {
		@apply w-1/2 bg-gray-200;
	}
</style>
