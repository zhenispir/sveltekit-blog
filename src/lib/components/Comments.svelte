<script>
	import { onMount } from 'svelte';
	// import { prefersDarkMode } from '$lib/data/store';

	// Translate the user's dark mode preference to a theme 
    // - ENABLE THIS LINE AFTER YOU ADD LIGHT / DARK MODE TO YOUR SITE
	//const siteTheme = $prefersDarkMode ? 'github-dark' : 'github-light';

	// An object with all the utterances options I want
	const options = {
		src: 'https://utteranc.es/client.js',
		repo: 'zhenispir/sveltekit-blog',
		label: 'comments',
		crossorigin: 'anonymous',
		theme: 'github-light',
		async: '',
		'issue-term': 'pathname'
	};

	onMount(() => {
		const utteranceScript = document.createElement('script');
		const targetTag = document.getElementById('utterances-comments');

		// Loop over the options & apply each property as an attribute
		for (const prop in options) {
			utteranceScript.setAttribute(prop, options[prop]);
		}

		targetTag.appendChild(utteranceScript);
	});
</script>

<div id="utterances-comments" />