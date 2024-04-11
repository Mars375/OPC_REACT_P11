const API_BASE_URL = "http://localhost:3000/data/about.json";

export const fetchAll = async () => {
	try {
		const response = await fetch(API_BASE_URL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching locations:", error);
	}
};
