import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import LocationsContext from "../../../contexts/LocationsContext";
import { LocationType } from "../../../utils/type";
import Typography from "../../atoms/Typography/Typography";
import ImageWithText from "../../molecules/ImageWithText/ImageWithText";
import RatingStars from "../../molecules/RatingStars/RatingStars";
import Tag from "../../atoms/Tag/Tag";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Gallery from "../../molecules/Gallery/Gallery";

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
		console.log(location);

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
			<Gallery images={images} />
			<div className='flex justify-between'>
				<div>
					<Typography tag='h2' color='primary' size='font-size-3xl'>
						{location?.title}
					</Typography>
					<Typography tag='p' color='dark' size='font-size-lg'>
						{location?.location}
					</Typography>
				</div>
				<ImageWithText
					src={location?.host.picture || ""}
					alt={location?.host.name || ""}
					text={location?.host.name || ""}
					rounded='full'
					imageWidth='w-16'
					imageHeight='h-16'
					color='primary'
					className='flex flex-row-reverse items-center gap-3 mb-4'
				/>
			</div>
			<div className='flex justify-between'>
				<div className='flex gap-2'>
					{location?.tags.map((tag, index) => (
						<Tag
							key={index}
							rounded='lg'
							color='light'
							minWidth='min-w-tag'
							height='h-6'
							className='justify-center flex items-center font-weight-bold font-size-sm pr-4 pl-4'
						>
							{tag}
						</Tag>
					))}
				</div>
				<RatingStars
					rating={Number(location?.rating)}
					color='primary'
					space='mr-3'
				/>
			</div>
			<div className='flex justify-between gap-14 mt-6 mb-12'>
				<Dropdown title='Description' option={location?.description || []} />
				<Dropdown title='Equipements' option={location?.equipments || []} />
			</div>
		</DefaultTemplate>
	);
}
