import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme');
	const data = await fetch(`${PUBLIC_BACKEND_URL}/theme`);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const fetchData: any[] = await data.json();
	const themeData = fetchData.map((theme) => ({
		name: theme.name,
		value: `body[data-theme="${theme.name}"]{${Object.entries(theme)
			.filter(([key]) => key != 'name')
			.map(([key, value]) => `--${key.replace(/_/g, '-')}:${value}`)
			.join(';')};}`
	}));
	const lightTheme = themeData.find((theme) => theme.name == 'light')?.value;
	const darkTheme = themeData.find((theme) => theme.name == 'dark')?.value;
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace('<body', theme ? `<body data-theme="${theme}"` : '<body')
				.replace('%theme%', `<style>body,${lightTheme}${darkTheme}</style>`)
	});
	return response;
};
