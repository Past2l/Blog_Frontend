<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '../components/Header.svelte';
	import { deleteCookie } from '../modules/cookie';
	import { themeColor } from '../store/theme';
	import { user } from '../store/user';
	import { style } from 'svelte-body';
	import '../styles/global.css';

	export let data;

	user.set(data?.user || null);
	if (browser && data?.user) deleteCookie('Authorization');

	$: themeStyle = Object.entries($themeColor || {})
		.filter(([key]) => key != 'name')
		.map(([key, value]) => `--${key.replace(/_/g, '-')}:${value}`)
		.join(';\n');
</script>

<svelte:head />
<svelte:body use:style={themeStyle} />

<main>
	<Header />
	<slot />
</main>

<style>
	:global(body) {
		background: var(--input-background);
		color: var(--text);
	}
</style>
