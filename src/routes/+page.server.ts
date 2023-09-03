import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { Cookies } from '@sveltejs/kit';
import type { PostWithTagText, PostWithTextArray } from '../types/post';
import type { User } from '../types/user';

export async function load({
	cookies
}: {
	cookies: Cookies;
}): Promise<{ post: PostWithTextArray[]; user?: User }> {
	const headers = { Authentication: cookies.get('Authentication') || '' };
	const post = await fetch(`${PUBLIC_BACKEND_URL}/post`, { headers });
	const user = await fetch(`${PUBLIC_BACKEND_URL}/auth`, { headers });
	return {
		post: (await post.json()).map((v: PostWithTagText) => ({ ...v, tag: JSON.parse(v.tag) })),
		user: user.status == 200 && (await user.json())
	};
}
