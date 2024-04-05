import React from "react";
import Typography from "../../atoms/Typography/Typography";
import Picture from "../../atoms/Picture/Picture";
import { WidthType, HeightType } from "../../../utils/enum";
import { TypographyProps, ImageProps, TextPosition } from "../../../utils/type";
import styles from "./ImageWithText.module.scss";

interface ImageWithTextProps {
	imageUrl: string;
	alt: string;
	text: string;
	imageWidth?: WidthType;
	imageHeight?: HeightType;
	rounded?: ImageProps["rounded"];
	color?: TypographyProps["color"];
	weight?: TypographyProps["weight"];
	size?: TypographyProps["size"];
	textPosition?: TextPosition;
	className?: string;
	gradient?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
	imageUrl,
	alt,
	text,
	imageWidth,
	rounded,
	imageHeight,
	color,
	size,
	weight,
	textPosition = "center",
	className,
	gradient,
}) => {
	const containerClassName = `absolute--${textPosition}`;

	return (
		<div className={`relative ${className}`}>
			<Picture
				src={imageUrl}
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
