<script lang="ts">
	import Navbar from '$lib/components/layouts/navbar.svelte';
	import Footer from '$lib/components/layouts/footer.svelte';

	import "@fontsource/montserrat";
	import "@fontsource/poppins"
	import "@fontsource/poppins/100.css"
	import "@fontsource/poppins/300.css"
	import "@fontsource/poppins/500.css"
	import "@fontsource/poppins/700.css"
	
	import '../app.css';
</script>

<Navbar />
<slot />
<Footer />