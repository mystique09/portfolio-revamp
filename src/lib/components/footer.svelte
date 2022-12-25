<script>
	import Github from 'carbon-icons-svelte/lib/LogoGithub16';
	import LogoLinkedin16 from 'carbon-icons-svelte/lib/LogoLinkedin16';
</script>

<footer class="w-full p-10 bg-neutral text-neutral-content dark:bg-base-100 dark:text-base-content">
	<div class="footer w-full max-w-4xl m-auto">
		<div>
			<div class="w-14 h-14">
				<img class="w-full h-full" src="/favicon.webp" alt="footer avatar" />
			</div>
			<p class="mt-2 text-white dark:text-neutral">Benjie Ben Garcia. <br />© {new Date().getFullYear()}</p>
		</div>
		<div class="div">
			<span class="text-neutral-content font-bold dark:text-base-content uppercase mb-0.5"
				>Social</span
			>
			<div class="grid grid-flow-col gap-4">
				<a
					id="github"
					aria-label="github"
					target="_blank"
					rel="noreferrer"
					href="https://github.com/mystique09"
				>
					<Github />
				</a>
				<a
					id="linkedin"
					aria-label="linkedin"
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/benjie-ben-garcia-916261202"
				>
					<LogoLinkedin16 />
				</a>
			</div>
		</div>
	</div>
</footer>
