<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '../components/Header.svelte';
	import { deleteCookie } from '../modules/cookie';
	import { user } from '../store/user';
	import '../styles/global.css';

	export let data;

	user.set(data?.user || null);
	if (browser && data?.user) deleteCookie('Authorization');
</script>

<svelte:head />

<main>
	<Header />
	<slot />
</main>

<style>
	:global(body) {
		background: var(--bg3);
		color: var(--text1);
	}
</style>
