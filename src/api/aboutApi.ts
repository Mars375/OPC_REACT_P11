const API_BASE_URL = "/data/about.json";

export const fetchAll = async () => {
	try {
		const response = await fetch(API_BASE_URL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching locations:", error);
	}
};
