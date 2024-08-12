<script>
    import { onMount } from 'svelte';
    export let data;
    $: ({ Resume } = data);

    import Main from '$lib/components/Main.svelte';
</script>

<svelte:head>
	<title>Zhenis Pir | Résumé</title>
	<meta data-key="description" name="description" content="My professional resume">
	<meta property="og:image" content="https://zhenispir.com/images/site-image.png" />
	<meta name="twitter:image" content="https://zhenispir.com/images/site-image.png"/>
	<meta name="robots" content="noindex,nofollow">
</svelte:head>

<Main>
	<div class="resume compressed-content">
		<svelte:component this={Resume} />
	</div>
</Main>