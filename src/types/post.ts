import type { Component } from './component';
import type { User } from './user';

export interface Post {
	id: number;
	title: string;
	secretEnable: boolean;
	secret: User[];
	component: Component[];
	commentEnable: boolean;
	comment: Comment[];
	created: Date;
	updated: Date;
}

export interface PostWithTagText extends Post {
	tag: string;
}

export interface PostWithTextArray extends Post {
	tag: string[];
}
