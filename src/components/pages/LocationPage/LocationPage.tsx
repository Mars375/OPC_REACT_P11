import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import LocationsContext from "../../../contexts/LocationsContext";

export default function LocationPage() {
	const { id } = useParams<{ id: string }>();
	const locationsContext = useContext(LocationsContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!locationsContext) {
			throw new Error("LocationsContext not found");
		}

		const location = locationsContext.locations.find(
			(location) => location.id === id
		);

		console.log(location);
		if (!location) {
			navigate("/404");
		}
	}, [id, locationsContext, navigate]);

	return (
		<DefaultTemplate>
			<h1>Location page</h1>
		</DefaultTemplate>
	);
}
