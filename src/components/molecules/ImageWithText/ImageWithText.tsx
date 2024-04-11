import React from "react";
import styles from "./ImageWithText.module.scss";
import { ImageWithTextProps } from "../../../utils/type";
import { Typography, Picture } from "../../atoms/";

const ImageWithText: React.FC<ImageWithTextProps> = ({
	src,
	alt,
	text,
	imageWidth = "w-full",
	imageHeight = "h-full",
	rounded = "none",
	color = "light",
	weight = "regular",
	textSize = "font-size-md",
	textClass = "",
	className = "",
	gradient = "",
}) => {
	return (
		<div className={`relative ${className} ${styles.imgFilter}`}>
			<Picture
				src={src}
				alt={alt}
				width={imageWidth}
				height={imageHeight}
				rounded={rounded}
			/>
			{gradient && <div className={`h-full w-full ${styles[gradient]}`} />}
			<Typography
				tag='p'
				className={textClass}
				color={color}
				size={textSize}
				weight={weight}
			>
				{text}
			</Typography>
		</div>
	);
};

export default ImageWithText;
