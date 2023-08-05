<script lang="ts">
	import Navbar from '$lib/components/layouts/navbar.svelte';
	import Footer from '$lib/components/layouts/footer.svelte';
	import '../app.css';
	import "@fontsource/poppins"
</script>

<Navbar />
<slot />
<Footer />