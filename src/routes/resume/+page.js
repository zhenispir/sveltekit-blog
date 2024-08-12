import { SvelteComponent } from 'svelte';

export const load = async () => {
    const resume = await import('$lib/content/resume.md');
    
    return {
        Resume: resume.default
    };
};
