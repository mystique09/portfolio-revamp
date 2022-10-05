<script>
	import Github from 'carbon-icons-svelte/lib/LogoGithub16';
	import Logo from 'carbon-icons-svelte/lib/Development24';
	import LogoLinkedin16 from 'carbon-icons-svelte/lib/LogoLinkedin16';
</script>

<footer id="contact-me" class="h-full bg-white p-4 flex flex-col">
	<div class="nav-logo font-bold text-xl flex flex-row">
		<Logo /> Ben
	</div>
	<div class="py-4">
		<span class="flex gap-1 items-center"
			><Github />
			<a
				class="font-normal underline-none"
				rel="noopener"
				target="__blank"
				href="https://github.com/mystique09">Github</a
			>
		</span>
		<span class="flex gap-1 items-center"
			><LogoLinkedin16 />
			<a
				class="font-normal underline-none"
				rel="noopener"
				target="__blank"
				href="https://www.linkedin.com/in/benjie-ben-garcia-916261202">Linkedin</a
			>
		</span>
	</div>
	<p class="text-sm font-light text-center">© {new Date().getFullYear()}</p>
</footer>
