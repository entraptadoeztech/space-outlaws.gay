import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null, // No fallback for static site
			precompress: isProduction, // Only compress in production
			strict: true // Enforce strict mode
		}),
		inlineStyleThreshold: 18000 // Inline styles under 18KB for faster initial paint
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
