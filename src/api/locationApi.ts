const API_BASE_URL = "/data/accomodations.json";

export const fetchAllLocations = async () => {
	try {
		const response = await fetch(API_BASE_URL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching locations:", error);
	}
};
