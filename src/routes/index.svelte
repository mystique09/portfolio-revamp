<script>
	import BtnIcon from 'carbon-icons-svelte/lib/Information24';
</script>

<div class="main">
	<div class="intro">
		<p>Hello, I am</p>
		<h2>Benjie Ben Garcia</h2>
		<p>A self-taught programmer</p>
	</div>
	<div class="img" />
</div>
<a class="btn" href="#abot-me">
	<BtnIcon />
	<span>About Me</span>
</a>

<style lang="postcss">
	.main {
		@apply p-2 flex flex-col-reverse gap-4;
	}
	.intro {
		@apply flex flex-col gap-2;
	}
	p:nth-child(3) {
		@apply text-blue-400 text-base;
	}
	p {
		@apply font-light text-xl;
	}
	.img {
		@apply h-72 bg-gray-200 max-w-md;
	}
	h2 {
		@apply font-bold text-3xl;
	}
	.btn {
		@apply mt-2 text-gray-200 py-2 text-center flex items-center justify-center gap-4 bg-blue-600 m-auto w-72 h-16 rounded-lg;
	}
	.btn span {
		@apply font-semibold text-lg;
	}
</style>

