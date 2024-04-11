import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import { LocationType } from "../../../utils/type";
import LocationsContext from "../../../contexts/LocationsContext";
import { ImageWithText } from "../../molecules/index";
import { FadeLoader } from "../../atoms/index";

import styles from "./HomePage.module.scss";
import hero from "../../../assets/IMG.png";

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
				textClass='absolute-center'
				rounded='md'
				color='light'
				weight='font-bold'
				textSize='sm:font-size-2xl lg:font-size-3xl'
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
								textClass='absolute-bottom-left p-3 w-full'
								color='light'
								weight='bold'
								textSize='font-size-lg'
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
