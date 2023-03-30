import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import MainLayout from "./reusable/Layout";
import GlobalStyle from "./styles/globals";
import { routers } from "./routes/rootRouters";

const root = ReactDOM.createRoot(
	document.getElementById(`root`) as HTMLElement
);

root.render(
	<React.StrictMode>
		<MainLayout>
			<RouterProvider router={routers} />
		</MainLayout>
		<GlobalStyle />
	</React.StrictMode>
);
