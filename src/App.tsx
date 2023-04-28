import React from "react";
import { RouterProvider } from "react-router-dom";

import { routers } from "./routes/rootRouters";
import GlobalStyle from "./styles/globals";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { isDayTime } from "./utills/isDayTime";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={isDayTime ? theme.day : theme.night}>
			<RouterProvider router={routers} />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
