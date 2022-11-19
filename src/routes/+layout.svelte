<script lang="ts">
	import '../app.css';
	import "@fontsource/poppins"

	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

</script>

<Navbar />
<slot />
<Footer />