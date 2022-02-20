<script lang="ts">
	import Menu32 from 'carbon-icons-svelte/lib/Menu32';
	import Close32 from 'carbon-icons-svelte/lib/Close32';
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
		<Menu32 />
	</div>
	<div class="nav-links-mobile">
		<div class="close-menu">
			<Close32 />
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
		@apply md:hidden;
	}
	.nav-links-mobile {
		@apply md:hidden hidden fixed top-0 left-0 h-full w-full bg-gray-700 text-white;
	}
	.nav-links-mobile ul {
		@apply flex flex-col items-center mt-16 gap-16;
	}
	.close-menu {
		@apply flex flex-col items-end;
	}
</style>
