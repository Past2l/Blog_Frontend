import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const defaultValue =
	browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const initialValue = browser
	? localStorage.getItem('theme')
		? localStorage.getItem('theme')
		: defaultValue
	: defaultValue;

const initialColorValue = browser
	? localStorage.getItem('themeColor')
		? JSON.parse(localStorage.getItem('themeColor') as string)
		: null
	: null;

export const theme = writable<string | null>(initialValue);
export const themeColor = writable<JSON | null>(initialColorValue);

theme.subscribe(async (value) => {
	if (browser) window.localStorage.setItem('theme', value || 'light');
	const fetchTheme = await fetch(`${PUBLIC_BACKEND_URL}/theme/${value}`);
	const themeData = await fetchTheme.json();
	themeColor.set(themeData);
});

themeColor.subscribe((value) => {
	if (browser) window.localStorage.setItem('themeColor', JSON.stringify(value));
});
