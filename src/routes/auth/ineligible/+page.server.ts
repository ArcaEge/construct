import { env } from '$env/dynamic/private';

export function load() {
	return {
		idvDomain: env.IDV_DOMAIN
	};
}
