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
				secondary: "#1E1E1E"
			}
		},
	},
	plugins: [],
}
