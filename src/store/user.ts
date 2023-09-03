import { writable } from 'svelte/store';
import type { User } from '../types/user';
import { browser } from '$app/environment';

const defaultValue = null;
const initialValue = browser
	? localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') || JSON.stringify(defaultValue))
		: defaultValue
	: defaultValue;

export const user = writable<User | null>(initialValue);

user.subscribe((value) => {
	if (browser) window.localStorage.setItem('user', JSON.stringify(value));
});
