<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		//localStorage.removeItem('theme');
	});
</script>

<Navbar />
<slot />
