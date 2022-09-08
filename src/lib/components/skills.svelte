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

<main id="skills">
	<div class="wrap">
		<div class="content">
			<h4>Skills</h4>
			<p>
				The programming languages, tech stacks, and tools listed below are things I've learned over
				the years of learning.
			</p>
		</div>
		<div class="skills">
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

<style lang="postcss">
	main {
		@apply h-screen bg-gray-400 p-2 py-2 gap-4 dark:bg-gray-900 flex items-center;
	}
	.wrap {
		@apply md:max-w-6xl flex flex-col gap-14 md:flex-row md:m-auto md:items-center md:justify-center;
	}
	.content {
		@apply md:w-1/3 flex flex-col gap-6;
	}
	h4 {
		@apply font-bold text-4xl text-gray-700 dark:text-gray-200;
	}
	p {
		@apply font-light text-sm md:text-base text-gray-700 dark:text-gray-300;
	}
	.skills {
		@apply grid grid-cols-4 gap-6 md:gap-8;
	}
</style>
