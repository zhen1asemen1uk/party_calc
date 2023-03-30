import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

import App from "../App";
import Main from "../pages/Main";
import PartyRoom from "../pages/PartyRoom";

export const routers = createBrowserRouter([
	{
		path: `/`,
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: `/main`,
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: `/party_room`,
		element: <PartyRoom />,
		errorElement: <ErrorPage />,
	},
	{
		path: `/error`,
		element: <ErrorPage />,
		errorElement: <ErrorPage />,
	},
]);
