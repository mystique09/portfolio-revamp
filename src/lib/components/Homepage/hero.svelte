<script context="module" lang="ts">
	const mainStyle = css({ bgColor: 'neutral.950', h: 'screen' });

	const containerStyle = container({
		display: 'grid',
		h: '100svh',
		gridRow: '3',
		px: 12
	});

	const contentContainerStyle = css({
		gridArea: '2/1',
		pos: 'relative',
		py: '2rem',
		w: 'auto',
		zIndex: '2',
		'&>h1.greetings': {
			display: 'flex',
			flexWrap: 'wrap',
			fontSize: '5xl',
			fontWeight: 'normal',
			color: 'white',
			lineHeight: '3.5rem',
			mb: '2rem',
			md: {
				fontSize: '3xl'
			},
			_dark: {
				color: 'white'
			},
			'&>span': {
				bg: 'yellow.500',
				rounded: 'sm',
				mx: '3'
			}
		}
	});

	const contentStyle = vstack({
		pos: 'relative',
		fontSize: 'lg',
		color: 'neutral.100',
		fontWeight: 'light',
		lineHeight: '2rem',
		alignItems: 'start',
		justifyContent: 'space-evenly',
		gap: '3',
		maxW: '2xl'
	});
</script>

<script lang="ts">
	import { css } from 'styled-system/css';
	import { container, vstack } from 'styled-system/patterns';

	// let skillSet: string[] = $state([
	// 	'am Front-End developer.',
	// 	'am a self-taught developer.',
	// 	'I know a little bit about Back-End development.'
	// ]);
	// let i = $state(0);

	// setInterval(() => (i = (i + 1) % skillSet.length), 3000);

	// let currentSkill = $derived(skillSet[i]);
</script>

<main id="#" class={mainStyle}>
	<section class={containerStyle}>
		<div class={contentContainerStyle}>
			<h1 class="greetings">Hello, you can call me Benj.</h1>
			<div class={contentStyle}>
				<p>
					I am excited to share with you some of my past projects and accomplishments as a
					programmer.
				</p>

				<p>
					As you browse through my portfolio, I hope you will get a sense of my passion for
					technology and my dedication to constantly learning and improving my skills.
				</p>
				<p>Thank you for visiting my portfolio and I hope you enjoy what you see.</p>
			</div>
			<div class="socials" />
		</div>
	</section>
</main>
