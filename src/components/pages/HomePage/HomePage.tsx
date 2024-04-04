import React, { useEffect, useState } from "react";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import ImageWithText from "../../molecules/ImageWithText.tsx/ImageWithText";
import hero from "../../../assets/IMG.png";
import { fetchAllLocations } from "../../../api/locationApi";

import styles from "./HomePage.module.scss";

export default function HomePage() {
	const [locations, setLocations] = useState<any[]>([]);

	useEffect(() => {
		const fetchLocationData = async () => {
			try {
				const data = await fetchAllLocations();
				setLocations(data);
			} catch (error) {
				console.error(
					"Une erreur s'est produite lors de la récupération des données de location:",
					error
				);
			}
		};
		fetchLocationData();
	}, []);

	return (
		<DefaultTemplate>
			<ImageWithText
				imageUrl={hero}
				alt="Description de l'image"
				text='Chez vous, partout et ailleurs'
				textPosition='center'
				rounded='md'
				color='white'
				weight='bold'
				size='font-size-4xl'
				Imgclass='filter'
			/>
			<div className={styles.mainContainer}>
				{locations &&
					locations.map((location) => (
						<ImageWithText
							imageUrl={location.cover}
							text={location.title}
							alt={location.title}
							textPosition='bottom-left'
							color='white'
							weight='bold'
							size='font-size-lg'
							Imgclass='filter-2'
							className='w-80 h-80'
							rounded='lg'
						/>
					))}
			</div>
		</DefaultTemplate>
	);
}
