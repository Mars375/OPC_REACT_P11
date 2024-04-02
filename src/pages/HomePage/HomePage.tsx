import React from "react";
import Typography from "../../components/atoms/Typography/Typography";
import Picture from "../../components/atoms/Picture/Picture";
import logo from "../../assets/LOGO.png";

export default function homePage() {
	return (
		<>
			<Typography tag='p' color='primary' weight='regular' size='medium'>
				Test de Typography
			</Typography>
			<Picture
				src={logo}
				alt='SVG Logo'
				width='w-full'
				height='h-48'
				objectFit='fill'
			/>
		</>
	);
}
