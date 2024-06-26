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
		}, 1000);
	}, []);

	return (
		<DefaultTemplate>
			{loading && <FadeLoader />}
			<ImageWithText
				src={hero}
				alt="Description de l'image"
				text='Chez vous, partout et ailleurs'
				textClass='xs:absolute-center-left lg:absolute-center p-3 w-full'
				rounded='md'
				color='light'
				weight='font-bold'
				textSize='xs:font-size-2xl lg:font-size-3xl'
				className='filter self-center xs:h-hero md:h-full w-full'
			/>
			<div className='flex xs:gap-5 xs:p-0 xs:bg-light md:gap-16 justify-center md:bg-secondary md:p-12 mt-12 mb-12 rounded-2xl flex-wrap-wrap'>
				{locations &&
					locations.locations.map((location: LocationType, index: number) => (
						<Link
							to={`/location/${location.id}`}
							key={location.id}
							style={{ animationDelay: `${index * 0.2}s` }}
							className={`${styles.fadeIn} xs:w-full md:w-auto`}
						>
							<ImageWithText
								src={location.cover}
								text={location.title}
								alt={location.title}
								textClass='absolute-bottom-left p-3 w-full'
								color='light'
								weight='font-bold'
								textSize='font-size-lg'
								className='md:w-cardDekstop md:h-cardDekstop xs:w-full xs:h-cardMobile'
								rounded='lg'
								gradient='gradient'
							/>
						</Link>
					))}
			</div>
		</DefaultTemplate>
	);
}
