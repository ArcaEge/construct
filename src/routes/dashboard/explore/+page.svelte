<script lang="ts">
	import Devlog from '$lib/components/Devlog.svelte';
	import Head from '$lib/components/Head.svelte';

	let { data } = $props();
</script>

<Head title="Explore" />

<h1 class="mt-5 mb-3 font-hero text-3xl font-medium">Explore</h1>

<div class="mt-3 mb-5 flex flex-col gap-3">
	{#if data.devlogs.length == 0}
		<div>
			No journal entries yet <img
				src="https://emoji.slack-edge.com/T0266FRGM/heavysob/55bf09f6c9d93d08.png"
				alt="heavysob"
				class="inline h-5.5"
			/>
		</div>
	{:else}
		{#each data.devlogs as devlog}
			<Devlog
				devlog={devlog.devlog}
				projectId={devlog.project.id}
				projectName={devlog.project.name}
				user={devlog.user}
				showModifyButtons={false}
				allowDelete={false}
			/>
		{/each}
	{/if}
</div>