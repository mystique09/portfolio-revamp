<script context="module" lang="ts">
	const headingStyle = css({
		w: 'full',
		h: 'auto',
		pos: 'sticky',
		bg: 'neutral.950',
		top: '0',
		zIndex: '30'
	});

	const navStyle = css({
		py: '6',
		px: '12',
		blur: 'md',
		bg: 'inherit',
		color: 'white'
	});

	const navInnerWrapperStyle = hstack({
		w: 'full',
		h: 'full',
		justify: 'space-between'
	});

	const logoStyle = hstack({
		fontSize: 'xl',
		fontWeight: '700'
	});

	const logoImageWrapperStyle = square({
		size: '10',
		pos: 'relative',
		bg: 'yellow.500',
		rounded: 'md',
		'& > img': {
			w: '97%',
			h: '97%',
			pos: 'absolute'
		}
	});

	const logoBrandNameStyle = css({ fontSize: '2xl', textTransform: 'lowercase' });

	const navLinksStyle = hstack({
		hideBelow: 'sm'
	});

	const menuBtnStyle = css({
		hideFrom: 'md',
		color: 'white'
	});
</script>

<script lang="ts">
	import { MenuIcon } from 'lucide-svelte';
	import { css } from 'styled-system/css';
	import { hstack, square } from 'styled-system/patterns';

	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
	let prefersDarkThemes = $state(false);
	let preferedTheme: string = $state('');
	let currentTheme: string = $state('');

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	const applyTheme = () => {
		preferedTheme = prefersDarkThemes ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferedTheme;

		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferedTheme;

		if (currentTheme === THEMES.DARK) {
			document.body.classList.remove(THEMES.LIGHT);
			document.body.classList.add(THEMES.DARK);
		} else {
			document.body.classList.remove(THEMES.DARK);
			document.body.classList.add(THEMES.LIGHT);
		}
	};

	$effect(() => {
		prefersDarkThemes = window.matchMedia(DARK_PREFERENCE).matches;
	});

	$effect(() => {
		preferedTheme = prefersDarkThemes ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferedTheme;
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<heading class={headingStyle}>
	<nav class={navStyle}>
		<div class={navInnerWrapperStyle}>
			<a class={logoStyle} href="/">
				<div class={logoImageWrapperStyle}>
					<img src="/favicon.webp" alt="Skull" />
				</div>
				<h1 class={logoBrandNameStyle}>BNJBN.G</h1>
			</a>
			<ul class={navLinksStyle}>
				<li>
					<a href="/#about">About</a>
				</li>
				<li>
					<a href="/#skills">Skills</a>
				</li>
				<li>
					<a href="/#projects">Projects</a>
				</li>
				<li>
					<a href="/#socials">Socials</a>
				</li>
			</ul>
			<button class={menuBtnStyle} type="button">
				<MenuIcon />
			</button>
		</div>
	</nav>
</heading>
