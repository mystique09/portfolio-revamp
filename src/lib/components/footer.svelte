<script>
	import Github from 'carbon-icons-svelte/lib/LogoGithub16';
	import LogoLinkedin16 from 'carbon-icons-svelte/lib/LogoLinkedin16';
</script>

<footer class="footer p-10 bg-neutral text-neutral-content dark:bg-base-100 dark:text-base-content">
	<div>
		<img width="50" height="50" src="/favicon.png" alt="footer avatar" />
		<p>Benjie Ben Garcia. <br>©	{new Date().getFullYear()}</p>
	</div>
	<div class="div">
		<span class="text-neutral-content font-bold uppercase mb-0.5">Social</span>
		<div class="grid grid-flow-col gap-4">
			<a id="github" aria-label="github" target="_blank" rel="noopener" href="https://github.com/mystique09">
				<Github />
			</a>
			<a id="linkedin" aria-label="linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/in/benjie-ben-garcia-916261202">
				<LogoLinkedin16 />
			</a>
		</div>
	</div>
</footer>
