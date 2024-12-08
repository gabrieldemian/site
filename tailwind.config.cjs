/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,astro,mdx}"],
	theme: {
		fontSize: {
			sm: "var(--step--1)", // small
			md: "var(--step-0)", // p
			lg: "var(--step-1)", // h6
			xl: "var(--step-2)", // h5
			"2xl": "var(--step-3)", // h4
			"3xl": "var(--step-4)", // h3
			"4xl": "var(--step-5)", // h1
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "0",
			},
		},
		extend: {
			fontFamily: {
				monospace: "monospace new",
				pixelcode: "pixelcode",
			},
			backgroundColor: {
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
			},
			textColor: {
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
			},
			borderColor: {
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
			},
			animation: {
				"soul-escaping-body": "soul-escaping-body 5s ease-in-out",
			},
			keyframes: {
				"soul-escaping-body": {
					"0%": {
						opacity: 0.5,
						bottom: 0,
						left: 0,
					},
					"25%": {
						opacity: 0.4,
						bottom: "5rem",
						left: "1rem",
					},
					"50%": {
						opacity: 0.25,
						bottom: "10rem",
						left: "-1rem",
					},
					"75%": {
						opacity: 0.22,
						bottom: "20rem",
						left: "1rem",
					},
					"100%": {
						opacity: 0.0,
						bottom: "55rem",
						left: "0rem",
					},
				},
			},
		},
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
			defaultFlavour: "macchiato",
		}),
	],
};
