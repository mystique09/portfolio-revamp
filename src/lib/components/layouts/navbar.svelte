<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { css } from 'styled-system/css';
	import { circle, container, hstack, square } from 'styled-system/patterns';
	import { Github, GithubIcon, LogOut, MenuIcon } from 'lucide-svelte';

	let showNav: boolean = false;

	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	let preferedTheme: string;
	let currentTheme: string;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		if (currentTheme === THEMES.DARK) {
			document.body.classList.remove(THEMES.LIGHT);
			document.body.classList.add(THEMES.DARK);
		} else {
			document.body.classList.remove(THEMES.DARK);
			document.body.classList.add(THEMES.LIGHT);
		}
	};

	function toggleTheme() {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
		}
		applyTheme();
	}

	onMount(() => {
		preferedTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferedTheme;
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<heading
	class={css({
		w: 'full',
		h: 'auto',
		pos: 'sticky',
		top: '0',
		zIndex: "30"
	})}
>
	<nav
		class={container({
			py: '3',
			bg: 'neutral.950',
			blur: 'md',
			color: 'white',
			borderBottom: '0.5px solid grey'
		})}
	>
		<div
			class={hstack({
				w: 'full',
				h: 'full',
				justify: 'space-between'
			})}
		>
			<a
				class={hstack({
					fontSize: 'xl',
					fontWeight: '700'
				})}
				href="/"
			>
				<div
					class={square({
						w: '8',
						h: '8',
						pos: 'relative',
						bg: "yellow.500",
						rounded: "md",
						'& > img': {
							w: '97%',
							h: '97%',
							pos: 'absolute'
						}
					})}
				>
					<img src="/favicon.webp" alt="Skull" />
				</div>
				<span class={css({ fontSize: '2xl', textTransform: "lowercase" })}>BNJBN.G</span>
			</a>
			<ul
				class={hstack({
					hideBelow: 'sm'
				})}
			>
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
			<button
				class={css({
					hideFrom: 'md',
					color: 'white'
				})}
				type="button"
			>
				<MenuIcon />
			</button>
		</div>
	</nav>
</heading>
