import React from "react";
import Typography from "../../atoms/Typography/Typography";
import Picture from "../../atoms/Picture/Picture";
import { WidthType, HeightType } from "../../../utils/enum";
import { TypographyProps, ImageProps, TextPosition } from "../../../utils/type";

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
	Imgclass?: string;
	className?: string;
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
	Imgclass,
	className,
}) => {
	const containerClassName = `ImageWithText absolute--${textPosition}`;

	return (
		<div className={`relative ${className}`}>
			<Picture
				src={imageUrl}
				alt={alt}
				width={imageWidth}
				height={imageHeight}
				rounded={rounded}
				className={`${Imgclass}`}
			/>
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
