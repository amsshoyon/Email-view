module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	screens: {
		xs: "0px",
		sm: "600px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
	},
	colors: {
		paper: "#fafafa",
		primary: {
			main: "#000",
			dark: "#000",
			light: "#fff",
		},
		error: {
			main: "#b22222",
			dark: "#8b0000",
		},
	},
	plugins: [],
};
