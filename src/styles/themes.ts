declare module "styled-components" {
	export interface DefaultTheme extends CustomTheme {}
}

interface CustomTheme {
	main: string;
	secondary: string;
}

export const theme = {
	day: {
		main: "white",
		secondary: "black",
	},
	night: {
		main: "black",
		secondary: "white",
	},
};
