import React, { useContext, useEffect, useState } from "react";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import ImageWithText from "../../molecules/ImageWithText/ImageWithText";
import hero from "../../../assets/IMG.png";
import { LocationType } from "../../../utils/type";
import styles from "./HomePage.module.scss";
import LocationsContext from "../../../contexts/LocationsContext";
import { Link } from "react-router-dom";
import FadeLoader from "../../atoms/FadeLoader/FadeLoader";

export default function HomePage() {
	const [loading, setLoading] = useState(true);
	const locations = useContext(LocationsContext);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<DefaultTemplate>
			{loading && <FadeLoader />}
			<ImageWithText
				src={hero}
				alt="Description de l'image"
				text='Chez vous, partout et ailleurs'
				textPosition='center'
				rounded='md'
				color='light'
				weight='bold'
				size='font-size-4xl'
				className='filter self-center'
			/>
			<div className={styles.mainContainer}>
				{locations &&
					locations.locations.map((location: LocationType, index: number) => (
						<Link
							to={`/location/${location.id}`}
							key={location.id}
							style={{ animationDelay: `${index * 0.2}s` }}
							className={styles.fadeIn}
						>
							<ImageWithText
								src={location.cover}
								text={location.title}
								alt={location.title}
								textPosition='bottom-left'
								color='light'
								weight='bold'
								size='font-size-lg'
								className='w-custom h-custom'
								rounded='lg'
								gradient='gradient'
							/>
						</Link>
					))}
			</div>
		</DefaultTemplate>
	);
}
