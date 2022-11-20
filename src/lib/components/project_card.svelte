<script lang="ts">
	export let name: string;
	export let description: string;
	export let repo: string;
	export let demo: string;
	export let tags: string[];
</script>

<div class="h-auto md:h-full card card-side bg-neutral text-neutral-content shadow-xl max-w-sm dark:bg-base-100 dark:text-base-content">
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
			<a class="btn btn-sm btn-primary dark:btn-secondary normal-case" target="_blank" rel="noopener" href={repo}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
				  </svg>
				  <span>Github</span>				  
			</a>
			{#if !!demo}
				<a class="btn btn-sm btn-primary dark:btn-secondary normal-case" target="_blank" rel="noopener" href={demo}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
					  </svg>
					  <span>Demo</span>					  
				</a>
			{/if}
		</div>
	</div>	
</div>