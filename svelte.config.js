import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter()
  }
};
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: true,
			strict: true
		}),
		inlineStyleThreshold: 18000
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
