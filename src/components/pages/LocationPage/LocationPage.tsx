import React from "react";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import { LocationType } from "../../../utils/type";

export default function LocationPage() {
	const locations = useLoaderData() as LocationType[];

	const { id } = useParams<{ id: string }>();
	const location = locations.find((loc) => loc.id === id);

	if (!location) {
		return <Navigate to='/404' />;
	}

	return (
		<DefaultTemplate>
			<h1>Location page</h1>
		</DefaultTemplate>
	);
}
