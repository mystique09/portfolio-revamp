<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { css } from 'styled-system/css';
	import { circle, container, hstack } from 'styled-system/patterns';
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
		top: '0'
	})}
>
	<nav
		class={container({
			py: '4',
			bg: 'black',
			opacity: '90%',
			blur: 'md',
			color: 'white',
			borderBottom: '1px solid black'
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
				<div class={css({ w: '8', h: '8', pos: 'relative' })}>
					<img
						class={css({ pos: 'absolute', h: 'full', w: 'full' })}
						src="/favicon.webp"
						alt="Skull"
					/>
				</div>
				<span class={css({ fontSize: 'md' })}>BNJBN.G</span>
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
