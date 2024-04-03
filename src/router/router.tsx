import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/About/AboutPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/About",
		element: <AboutPage />,
	},
]);

export default router;
