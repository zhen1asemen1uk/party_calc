import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

import Main from "../pages/Main";
import PartysConteiner from "../components/Partys/PartysConteiner";
import MainLayout from "../reusable/Layout";
import PartyConteiner from "../components/Party/PartyConteiner";

const arrPathsAndComponents = [
	{
		path: `/`,
		element: <Main />,
	},
	{
		path: `/party`,
		element: <PartyConteiner />,
	},
	{
		path: `/partys`,
		element: <PartysConteiner />,
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
