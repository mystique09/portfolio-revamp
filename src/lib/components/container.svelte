<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<main class="" {id}>
	<h2 class="">{title}</h2>
	<slot />
</main>