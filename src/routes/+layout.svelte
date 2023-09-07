<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '../components/Header.svelte';
	import { deleteCookie } from '../module/cookie';
	import { themeColor } from '../store/theme';
	import { user } from '../store/user';
	import '../styles/global.css';

	export let data;

	user.set(data?.user || null);
	if (browser && data?.user) deleteCookie('Authorization');

	$: style = Object.entries($themeColor || {})
		.filter(([key]) => key != 'name')
		.map(([key, value]) => `--${key.replace(/_/g, '-')}:${value}`)
		.join(';\n');
</script>

<svelte:head />
<main {style}>
	<Header />
	<slot />
</main>

<style>
	main {
		background: var(--input-background);
		color: var(--text);
	}
</style>
