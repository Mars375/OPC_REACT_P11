import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import AboutPage from "../components/pages/About/AboutPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import LocationPage from "../components/pages/LocationPage/LocationPage";
import { fetchAllLocations } from "../api/locationApi";

const loadLocations = async () => {
	try {
		const locations = await fetchAllLocations();
		return locations;
	} catch (error) {
		console.error(error);
		return [];
	}
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		loader: loadLocations,
	},
	{
		path: "/About",
		element: <AboutPage />,
	},
	{
		path: "/Location/:id",
		element: <LocationPage />,
		loader: loadLocations,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default router;
