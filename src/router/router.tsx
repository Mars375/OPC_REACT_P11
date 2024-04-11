import { createBrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "../components/pages/HomePage/HomePage";
import AboutPage from "../components/pages/AboutPage/AboutPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import LocationPage from "../components/pages/LocationPage/LocationPage";
import FadeLoader from "../components/atoms/FadeLoader/FadeLoader";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<React.Suspense fallback={<FadeLoader />}>
				<HomePage />
			</React.Suspense>
		),
	},
	{
		path: "/About",
		element: (
			<React.Suspense fallback={<FadeLoader />}>
				<AboutPage />
			</React.Suspense>
		),
	},
	{
		path: "/Location/:id",
		element: (
			<React.Suspense fallback={<FadeLoader />}>
				<LocationPage />
			</React.Suspense>
		),
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default router;
