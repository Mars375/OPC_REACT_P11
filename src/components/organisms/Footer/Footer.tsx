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
				width='w-32'
				height='h-10'
				className='pb-7'
			/>
			<Typography tag='p' color='white' size='font-size-2xl'>
				© 2020 Kasa. All rights reserved
			</Typography>
		</footer>
	);
}
