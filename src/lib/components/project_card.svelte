<script lang="ts">
	export let name: string;
	export let description: string;
	export let repo: string;
	export let demo: string;
	export let tags: string[];
</script>

<div class="h-auto md:h-full card card-side bg-neutral text-neutral-content shadow-xl max-w-sm">
	<div class="card-body">
		<div class="card-title">	
			<h1 class="mt-2">{name}</h1>
			<div class="badges absolute top-0 right-0 flex flex-row p-3 gap-1">
				{#each tags as tag}
					<div class="badge badge-primary dark:badge-secondary">{tag}</div>
				{/each}
			</div>
		</div>
		<p class="text-sm">{description}</p>
		<div class="card-actions justify-end mt-2">
			<a class="btn btn-sm btn-primary dark:btn-secondary normal-case" target="_blank" rel="noopener" href={repo}>Github</a>
			{#if !!demo}
				<a class="btn btn-sm btn-primary dark:btn-secondary normal-case" target="_blank" rel="noopener" href={demo}>Demo</a>
			{/if}
		</div>
	</div>	
</div>