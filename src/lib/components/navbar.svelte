<script lang="ts">
	import Menu from 'carbon-icons-svelte/lib/Menu24';
	import Close from 'carbon-icons-svelte/lib/Close32';
	import Logo from 'carbon-icons-svelte/lib/Development24';

	let toggleNav = false;

	function toggleNavbar() {
		toggleNav = !toggleNav;
	}

	interface NavLink {
		href: string;
		title: string;
	}

	let nav_links: Array<NavLink> = [
		{ href: '#about-me', title: 'About Me' },
		{ href: '#projects', title: 'Projects' },
		{ href: '#skills', title: 'Skills' },
		{ href: '#contact-me', title: 'Contact Me' }
	];
</script>

<nav>
	<div class="nav-logo flex flex-row">
		<Logo /> Ben
	</div>
	<div class="nav-links">
		<ul>
			{#each nav_links as nav_link}
				<li><a href={nav_link.href}>{nav_link.title}</a></li>
			{/each}
		</ul>
	</div>
	<div class="nav-icons">
		<div class="menu-icon">
			<Menu on:click={() => (toggleNav = true)} />
		</div>
		<!-- <div class={`toggler ${toggle ? 'toggler-light' : 'toggler-dark'}`} on:click={toggleDarkMode}>
			<span class={`circle ${toggle ? 'circle-light' : 'circle-dark'}`} />
		</div> -->
	</div>
	<div class={`nav-links-mobile ${toggleNav ? 'show' : 'hide'}`}>
		<div class="close-menu" on:click={() => (toggleNav = false)}>
			<Close />
		</div>
		<ul>
			{#each nav_links as nav_link}
				<li on:click={toggleNavbar}><a href={nav_link.href}>{nav_link.title}</a></li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply flex flex-row items-center justify-between px-4 h-20 bg-white text-white;
	}
	.nav-logo {
		@apply text-primary font-bold text-2xl;
	}
	.nav-links {
		@apply hidden md:flex ml-auto px-14;
	}
	.nav-links ul {
		@apply text-black md:flex md:flex-row md:items-center md:gap-8;
	}
	.nav-icons {
		@apply flex flex-row-reverse  items-center gap-4;
	}
	.menu-icon {
		@apply md:hidden text-primary;
	}
	/*
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
		@apply left-0 bg-yellow-600 duration-700;
	}*/
	.nav-links-mobile {
		@apply md:hidden hidden fixed top-0 left-0 h-full w-full bg-gray-700 text-white;
	}
	.nav-links-mobile ul {
		@apply flex flex-col items-center mt-16 gap-16 w-full justify-center;
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
