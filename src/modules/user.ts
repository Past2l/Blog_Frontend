import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { User } from '../types/user';
import { deleteCookie, getCookie, setCookie } from './cookie';
import { user } from '../store/user';

export async function login(email: string, password: string) {
	const result = await fetch(`${PUBLIC_BACKEND_URL}/auth`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password })
	});
	if (result.status <= 201) {
		const data = await result.json();
		setCookie('Authentication', data.accessToken, { expires: 2592000000 });
		user.set({ ...data, accessToken: undefined });
		location.href = '/';
	} else alert('이메일이나 비밀번호가 잘못되었습니다.');
}

export async function logout() {
	deleteCookie('Authentication');
	user.set(null);
	location.href = '/';
}

export async function currentUser(): Promise<User | null> {
	const result = await fetch(`${PUBLIC_BACKEND_URL}/auth`, {
		headers: { Authentication: getCookie('Authentication') }
	});
	return result.status <= 201 ? await result.json() : null;
}
