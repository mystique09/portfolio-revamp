<script lang="ts">
	import Css from './skills/css.svelte';
	import ExpressJs from './skills/express_js.svelte';
	import Go from './skills/go.svelte';
	import Html from './skills/html.svelte';
	import Javascript from './skills/javascript.svelte';
	import NodeJs from './skills/node_js.svelte';
	import Rust from './skills/rust.svelte';
	import Sass from './skills/sass.svelte';
	import Svelte from './skills/svelte.svelte';
	import Tailwind from './skills/tailwind.svelte';
</script>

<main class="dark:bg-gray-900" id="skills">
	<div class="wrap md:max-w-6xl md:flex-row md:m-auto md:items-center md:justify-center">
		<div class="content md:w-1/3">
			<h4 class="dark:text-gray-200">Skills</h4>
			<p class="md:text-base dark:text-gray-300">
				The programming languages, tech stacks, and tools listed below are things I've learned over
				the years of learning.
			</p>
		</div>
		<div class="skills md:gap-8">
			<Css />
			<ExpressJs />
			<Go />
			<Html />
			<Javascript />
			<NodeJs />
			<Rust />
			<Sass />
			<Svelte />
			<Tailwind />
		</div>
	</div>
</main>

<style>
	main {
		@apply h-screen bg-gray-400 p-2 py-2 gap-4 flex items-center;
	}
	.wrap {
		@apply flex flex-col gap-14;
	}
	.content {
		@apply flex flex-col gap-6;
	}
	h4 {
		@apply font-bold text-4xl text-gray-700;
	}
	p {
		@apply font-light text-sm text-gray-700;
	}
	.skills {
		@apply grid grid-cols-4 gap-6;
	}
</style>
