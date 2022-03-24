import { createTheme } from "@mui/material";

// THIS OBJECT SHOULD BE SIMILAR TO ../tailwind.config.js
const themeConstants = {
	paper: "#FAFAFA",
	primary: {
		main: "#000",
		dark: "#000",
		light: "#fff",
	},
	error: {
		main: "#b22222",
		dark: "#8b0000",
	},
	breakpoints: {
		  xs: 0,
		  sm: 600,
		  md: 768,
		  lg: 976,
		  xl: 1440
	},
};

const Theme = createTheme({
	palette: {
		primary: themeConstants.primary,
		background: { paper: themeConstants.paper },
		text: {
			primary: themeConstants.primary.dark,
			secondary: themeConstants.light,
		},
		error: themeConstants.error,
	},
	breakpoints: {
		values: themeConstants.breakpoints,
	},
});

export {Theme};
