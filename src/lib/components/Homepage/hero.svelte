<script lang="ts">
	import { css } from 'styled-system/css';
	import { container, float, vstack, wrap } from 'styled-system/patterns';

	let skillSet: string[] = [
		'am Back-end developer.',
		'am a self-taught developer.',
		'am a Golang fan boi.',
		'know a little bit about Front-end development.'
	];
	let i = 0;

	setInterval(() => (i = (i + 1) % skillSet.length), 3000);

	$: currentSkill = skillSet[i];
</script>

<main id="#" class={css({ bgColor: 'neutral.950', h: 'screen' })}>
	<div class={container()}>
		<span
			class={float({
				placement: 'middle-center',
				color: 'neutral.900',
				opacity: '60%',
				fontSize: '40rem',
				zIndex: '1'
			})}
		>
			B
		</span>
		<div class={css({ pos: 'relative', py: '2rem', zIndex: '2' })}>
			<h1
				class={wrap({
					fontSize: '5xl',
					fontWeight: 'bold',
					color: 'white',
					lineHeight: '3.5rem',
					mb: '2rem',
					md: {
						fontSize: '3xl'
					},
					_dark: {
						color: 'white'
					}
				})}
			>
				Hello, you can call me <span class={css({ bg: 'yellow.500', rounded: 'lg' })}
					>{'{{'} Benjie {'}}'}</span
				>
			</h1>
			<div
				class={vstack({
					pos: 'relative',
					fontSize: 'lg',
					color: 'neutral.100',
					fontWeight: 'light',
					lineHeight: '1.7rem',
					alignItems: 'start',
					justifyContent: 'space-evenly',
					gap: '3'
				})}
			>
				<p>
					Welcome to my portfolio. I am excited to share with you some of my past projects and
					accomplishments as a programmer.
				</p>

				<p>
					As you browse through my portfolio, I hope you will get a sense of my passion for
					technology and my dedication to constantly learning and improving my skills.
				</p>
				<p>Thank you for visiting my portfolio and I hope you enjoy what you see.</p>
			</div>
			<div class="socials" />
		</div>
	</div>
</main>
