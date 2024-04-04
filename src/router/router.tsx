import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import AboutPage from "../components/pages/About/AboutPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";

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
