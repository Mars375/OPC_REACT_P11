import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import LocationsContext from "../../../contexts/LocationsContext";
import { LocationType } from "../../../utils/type";
import { Typography, Tag } from "../../atoms";
import { ImageWithText, RatingStars, Dropdown, Gallery } from "../../molecules";

export default function LocationPage() {
	const [location, setLocation] = useState<LocationType | undefined>(undefined);
	const { id } = useParams<{ id: string }>();
	const locationsContext = useContext(LocationsContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!locationsContext) {
			throw new Error("LocationsContext not found");
		}

		const location = locationsContext.locations.find(
			(location) => location.id === id
		);
		setLocation(location);

		if (!location) {
			navigate("/404");
		}
	}, [id, locationsContext, navigate]);

	const images =
		location?.pictures.map((picture) => ({
			src: picture,
			alt: location.title,
		})) || [];
	return (
		<DefaultTemplate>
			<Gallery
				images={images}
				arrowHeight='xs:h-4 lg:h-17'
				arrowWidth='xs:w-6 lg:w-12'
			/>
			<div className='flex justify-between xs:flex-column lg:flex-row'>
				<div className='flex flex-column xs:gap-3 md:gap-0'>
					<Typography tag='h2' color='primary' size='font-size-3xl'>
						{location?.title}
					</Typography>
					<Typography tag='p' color='dark' size='font-size-lg'>
						{location?.location}
					</Typography>
					<div className='mt-5 flex gap-2'>
						{location?.tags.map((tag, index) => (
							<Tag
								key={index}
								rounded='md'
								color='light'
								minWidth='min-w-tag'
								height='h-6'
								className='font-bold justify-center flex items-center xs:font-size-xxs md:font-size-sm pr-4 pl-4'
							>
								{tag}
							</Tag>
						))}
					</div>
				</div>
				<div className='flex xs:flex-row lg:flex-column-reverse items-center xs:gap-8 lg:gap-0 justify-between'>
					<RatingStars
						rating={Number(location?.rating)}
						color='primary'
						space='mr-3'
					/>
					<ImageWithText
						src={location?.host.picture || ""}
						alt={location?.host.name || ""}
						text={location?.host.name || ""}
						rounded='full'
						imageWidth='w-16'
						imageHeight='h-16'
						color='primary'
						className='flex flex-row-reverse items-center gap-3 mb-4 w-footer self-end'
					/>
				</div>
			</div>
			<div className='flex xs:flex-column lg:flex-row justify-between lg:gap-14 xs:gap-5 mt-6 mb-12'>
				<Dropdown
					title='Description'
					option={location?.description || []}
					className='xs:max-m-full lg:max-w-half flex-dropdown'
				/>
				<Dropdown
					title='Equipements'
					option={location?.equipments || []}
					className='xs:max-m-full lg:max-w-half flex-dropdown'
				/>
			</div>
		</DefaultTemplate>
	);
}
