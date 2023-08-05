/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				benjieben: {
					primary: '#46d8db',
					secondary: '#ffccd2',
					accent: '#3b2ad6',
					neutral: '#242938',
					'base-100': '#F1EDF7',
					info: '#74A2F6',
					success: '#73EDB8',
					warning: '#F4A85D',
					error: '#E94E6D'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
