import React, { useState, useEffect } from "react";
import LocationsContext from "./LocationsContext";
import { LocationType } from "../utils/type";
import { fetchAllLocations } from "../api/locationApi";

export function LocationsProvider({ children }: { children: React.ReactNode }) {
	const [locations, setLocations] = useState<LocationType[]>([]);

	useEffect(() => {
		const loadLocations = async () => {
			const locationsData = await fetchAllLocations();
			const locations = Object.values(locationsData) as LocationType[];
			setLocations(locations);
		};

		loadLocations();
	}, []);

	return (
		<LocationsContext.Provider value={{ locations }}>
			{children}
		</LocationsContext.Provider>
	);
}
