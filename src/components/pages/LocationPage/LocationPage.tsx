import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import LocationsContext from "../../../contexts/LocationsContext";
import { LocationType } from "../../../utils/type";
import Typography from "../../atoms/Typography/Typography";
import Picture from "../../atoms/Picture/Picture";
import ImageWithText from "../../molecules/ImageWithText.tsx/ImageWithText";
import RatingStars from "../../atoms/RatingStars/RatingStars";
import Tag from "../../atoms/Tag/Tag";

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

		console.log(location);
	}, [id, locationsContext, navigate]);

	return (
		<DefaultTemplate>
			<Picture
				src={location?.cover || ""}
				alt={location?.title || ""}
				rounded='xxl'
				className='mb-3'
				height='h-custom2'
			/>
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
					className='flex flex-row-reverse align-center gap-3 mb-4'
				/>
			</div>
			<div className='flex justify-between'>
				<div className='flex gap-2'>
					{location?.tags.map((tag, index) => (
						<Tag
							key={index}
							rounded='lg'
							color='light'
							width='w-tag'
							height='h-6'
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
		</DefaultTemplate>
	);
}
