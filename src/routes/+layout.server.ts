import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { Cookies } from '@sveltejs/kit';
import type { User } from '../types/user';
import type { Introduce } from '../types/introduce';

export async function load({
	cookies
}: {
	cookies: Cookies;
}): Promise<{ introduce: Introduce; user?: User }> {
	const headers = { Authentication: cookies.get('Authentication') || '' };
	const user = await fetch(`${PUBLIC_BACKEND_URL}/auth`, { headers });
	const introduce = { name: 'Past2l' }; // TODO
	return { user: user.status == 200 ? await user.json() : undefined, introduce };
}
