import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'styled-system': './styled-system/*'
		},
		typescript: {
			config: (config) => {
				config.include.push("../styled-system");
				return config;
			}
		}
	}
};

export default config;
