import { createContext } from "react";
import { LocationType } from "../utils/type";

const LocationsContext = createContext<{ locations: LocationType[] }>({
	locations: [],
});

export default LocationsContext;
