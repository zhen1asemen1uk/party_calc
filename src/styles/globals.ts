import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./fonts/fonts";

const GlobalStyle = createGlobalStyle`
 	${fontFaces}

	html,
	body {
		font-family: 'eUkraineHeadRegular',system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 0;
		margin: 0;
		background: ${({ theme }) => theme.main};
		
	}
	
	* {
		color: ${({ theme }) => `${theme.secondary}`} ;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
	}

	ul,
	li {
		display: block;
		padding: 0;
		margin: 0;
	}

	div,
	p,
	form,
	input,
	a,
	span,
	button {
		color: ${({ theme }) => theme.secondary};
		text-decoration: none;
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
