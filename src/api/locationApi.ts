const API_BASE_URL = "http://localhost:3000/data/accomodations.json";

export const fetchAllLocations = async () => {
	try {
		const response = await fetch(API_BASE_URL);
		if (!response.ok) {
			throw new Error(
				"La requête n'a pas réussi. Statut du serveur : " + response.status
			);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(
			"Une erreur s'est produite lors de la récupération des données de location."
		);
	}
};
