<script lang="ts">
	import { css } from 'styled-system/css';
	import { container, float, vstack } from 'styled-system/patterns';

	let skills: string[] = [
		'go developer',
		'typescript',
		'proficient in javascript',
		'a backend developer',
		'self-taught'
	];
	let i = 0;

	setInterval(() => (i = (i + 1) % skills.length), 3000);

	$: currentSkill = skills[i];
</script>

<main id="#" class={css({ bgColor: 'neutral.950', h: '100vh' })}>
	<div class={container()}>
		<div class={css({ pos: 'relative', py: '2rem' })}>
			<!--
			<h1
				class={css({
					fontSize: '3xl',
					fontWeight: 'bold',
					color: 'white',
					lineHeight: '1.5rem',
					mb: '2rem',
					md: {
						fontSize: '3xl'
					},
					_dark: {
						color: 'white'
					}
				})}
			>
				Benjie Ben G.
			</h1>
			-->
			<h1
				class={float({
					placement: 'middle-center',
					color: 'neutral.900',
					fontSize: '40rem',
					zIndex: '-1'
				})}
			>
				B
			</h1>

			<div
				class={vstack({
					fontSize: 'sm',
					color: 'neutral.100',
					fontWeight: 'normal',
					lineHeight: '1.5rem',
					gap: "3"
				})}
			>
				<p>
					Hello, welcome to my portfolio. I am excited to share with you some of my past projects
					and accomplishments as a programmer.
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
