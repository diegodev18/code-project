/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textColor: {
				main: "#fde047"
			},
			backgroundColor: {
				main: "#28292B",
				secondary: "#1E1E1E",
				buttonHov: "#131313",
				nav: "#0C0C0C"
			},
			typography: {
				DEFAULT: {
					css: {
						'*': { marginBottom: '0.5rem', marginTop: '0.8rem' },
						h1: { fontWeight: '600' },
						pre: { marginBottom: '0.8rem', cursor: 'pointer', fontWeight: '600' },
						code: { color: '#fde047', backgroundColor: '#0c0c0c', paddingLeft: '0.3rem', paddingRight: '0.3rem', paddingTop: '0.2rem', paddingBottom: '0.1rem', borderRadius: '0.25rem' },
						'code::before, code::after': { content: '""' },
						'a': { color: '#fde047' },
						'a:hover': { color: '#fde047' },
						'ul, ol': { marginTop: '0rem' },
						'ul > li, ol > li': { marginLeft: '1.5rem', marginTop: '0.5rem',  },
					}
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
