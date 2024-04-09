import React from "react";
import Picture from "../../atoms/Picture/Picture";
import Typography from "../../atoms/Typography/Typography";
import logo from "../../../assets/LOGO (1).png";
import "./Footer.module.scss";

export default function Footer() {
	return (
		<footer>
			<Picture
				src={logo}
				alt='SVG Logo'
				width='w-footer'
				height='h-10'
				className='pb-7'
				objectFit='contain'
			/>
			<Typography tag='p' color='light' size='font-size-2xl'>
				© 2020 Kasa. All rights reserved
			</Typography>
		</footer>
	);
}
