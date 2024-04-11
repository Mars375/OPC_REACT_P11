import React from "react";
import styles from "./ImageWithText.module.scss";
import { ImageWithTextProps } from "../../../utils/type";
import { Typography, Picture } from "../../atoms/";

const ImageWithText: React.FC<ImageWithTextProps> = ({
	src,
	alt,
	text,
	imageWidth,
	rounded,
	imageHeight,
	color,
	size,
	weight,
	textPosition,
	className,
	gradient,
}) => {
	const containerClassName = `absolute--${textPosition} p-3 w-full`;

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
				className={containerClassName}
				color={color}
				size={size}
				weight={weight}
			>
				{text}
			</Typography>
		</div>
	);
};

export default ImageWithText;
