import React from "react";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import ImageWithText from "../../molecules/ImageWithText.tsx/ImageWithText";
import hero from "../../../assets/IMG.png";
import { LocationType } from "../../../utils/type";
import styles from "./HomePage.module.scss";
import { Link, useLoaderData } from "react-router-dom";

export default function HomePage() {
	const locations = useLoaderData() as LocationType[];

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
				className='filter'
			/>
			<div className={styles.mainContainer}>
				{locations &&
					locations.map((location: LocationType) => (
						<Link to={`/location/${location.id}`} key={location.id}>
							<ImageWithText
								imageUrl={location.cover}
								text={location.title}
								alt={location.title}
								textPosition='bottom-left'
								color='white'
								weight='bold'
								size='font-size-lg'
								className='w-80 h-80'
								rounded='lg'
								gradient='gradient'
							/>
						</Link>
					))}
			</div>
		</DefaultTemplate>
	);
}
