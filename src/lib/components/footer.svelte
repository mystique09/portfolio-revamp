<script>
	import Github from 'carbon-icons-svelte/lib/LogoGithub16';
	import Logo from 'carbon-icons-svelte/lib/Development24';
	import LogoLinkedin16 from 'carbon-icons-svelte/lib/LogoLinkedin16';
</script>

<footer class="footer p-10 bg-neutral text-neutral-content">
	<div>
		<img width="50" height="50" src="/favicon.png" alt="footer avatar" />
		<p>Benjie Ben Garcia. <br>©	{new Date().getFullYear()}</p>
	</div>
	<div class="div">
		<span class="footer-title">Social</span>
		<div class="grid grid-flow-col gap-4">
			<a target="_blank" rel="noopener" href="https://github.com/mystique09">
				<Github />
			</a>
			<a target="_blank" rel="noopener" href="https://www.linkedin.com/in/benjie-ben-garcia-916261202">
				<LogoLinkedin16 />
			</a>
		</div>
	</div>
</footer>
