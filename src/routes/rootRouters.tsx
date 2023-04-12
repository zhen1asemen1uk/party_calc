import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

import MainLayout from "../reusable/Layout";

import Main from "../pages/Main";
import Partys from "../components/Partys/Partys";
import Party from "../components/Party/Party";

const arrPathsAndComponents = [
	{
		path: `/`,
		element: <Main />,
	},
	{
		path: `/party`,
		element: <Party />,
	},
	{
		path: `/partys`,
		element: <Partys />,
	},
	{ path: `/error`, element: <ErrorPage /> },
];

export const routers = createBrowserRouter(
	arrPathsAndComponents.map((el) => ({
		path: el.path,
		element: <MainLayout>{el.element}</MainLayout>,
		errorElement: <ErrorPage />,
	}))
);
