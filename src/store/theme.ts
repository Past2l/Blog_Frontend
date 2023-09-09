import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { getCookie, setCookie } from '../modules/cookie';

export const theme = writable<'light' | 'dark'>('light', (set) => {
	if (browser)
		set(
			document.body.dataset.theme
				? (document.body.dataset.theme as 'light' | 'dark')
				: localStorage.getItem('theme')
				? (localStorage.getItem('theme') as 'light' | 'dark')
				: getCookie('theme')
				? (getCookie('theme') as 'light' | 'dark')
				: window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
		);
});

theme.subscribe((value) => {
	if (browser) {
		document.body.dataset.theme = value;
		setCookie('theme', value);
		localStorage.setItem('theme', value);
	}
});
