import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LocationsProvider } from "./contexts/LocationsProvider";
import router from "./router/router";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LocationsProvider>
			<RouterProvider router={router} />
		</LocationsProvider>
	</React.StrictMode>
);
