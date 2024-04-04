import axios from "axios";

const API_BASE_URL = "http://localhost:3000/data/accomodations.json";

export const fetchAllLocations = async () => {
	try {
		const response = await axios.get(API_BASE_URL);
		return response.data;
	} catch (error) {
		throw new Error(
			"Une erreur s'est produite lors de la récupération des données de location."
		);
	}
};
