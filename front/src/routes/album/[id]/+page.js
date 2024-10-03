import { error } from '@sveltejs/kit';

// @ts-ignore
export function load({ params }) {
	if (params.id) {
		return {
			id: params.id
		};
	}

	error(404, 'Not found');
}