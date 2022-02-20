<script lang="ts">
	import Menu from 'carbon-icons-svelte/lib/Menu24';
	import Close from 'carbon-icons-svelte/lib/Close32';
	let toggle = true;
	let toggleNav = false;
</script>

<div class="nav">
	<div class="nav-logo">Portfolio</div>
	<div class="nav-links">
		<ul>
			<li><a href="#about-me">About Me</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#contact-me">Contact Me</a></li>
		</ul>
	</div>
	<div class="menu-icon">
		<Menu on:click={() => (toggleNav = true)} />
		<div
			class={`toggler ${toggle ? 'toggler-dark' : 'toggler-light'}`}
			on:click={() => (toggle = !toggle)}
		>
			<span class={`circle ${toggle ? 'circle-dark' : 'circle-light'}`} />
		</div>
	</div>
	<div class={`nav-links-mobile ${toggleNav ? 'show' : 'hide'}`}>
		<div class="close-menu" on:click={() => (toggleNav = false)}>
			<Close />
		</div>
		<ul>
			<li><a href="#about-me">About Me</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#contact-me">Projects</a></li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.nav {
		@apply flex flex-row items-center justify-between px-2 h-20 bg-gray-700 text-white;
	}
	.nav-logo {
		@apply font-bold text-2xl;
	}
	.nav-links {
		@apply hidden md:block;
	}
	.nav-links ul {
		@apply md:flex md:flex-row md:items-center md:gap-8;
	}
	.menu-icon {
		@apply md:hidden flex flex-row-reverse  items-center gap-4;
	}
	.toggler {
		@apply relative w-10 h-4 px-2 rounded-full ring ring-blue-300 flex flex-row items-center justify-end ease-in-out;
	}
	.toggler-dark {
		@apply bg-gray-300 duration-300;
	}
	.toggler-light {
		@apply bg-gray-800 duration-300;
	}
	.circle {
		@apply absolute w-3 h-3 rounded-full ease-in-out;
	}
	.circle-light {
		@apply right-0 bg-yellow-300 duration-700;
	}
	.circle-dark {
		@apply left-0 bg-gray-800 duration-700;
	}
	.nav-links-mobile {
		@apply md:hidden hidden fixed top-0 left-0 h-full w-full bg-gray-700 text-white;
	}
	.nav-links-mobile ul {
		@apply flex flex-col items-center mt-16 gap-16 w-full;
	}
	.show {
		@apply flex;
	}
	.hide {
		@apply hidden;
	}
	.close-menu {
		@apply flex flex-row items-start justify-start right-2 top-5 absolute;
	}
</style>
