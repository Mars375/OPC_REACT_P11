import React from "react";
import { ImageProps } from "../../../utils/type";

const Picture: React.FC<ImageProps> = ({
	src,
	alt,
	rounded = "none",
	width = "w-full",
	height = "h-full",
	objectFit = "cover",
	className,
}) => {
	const widthClass = width ? `${width}` : "";
	const heightClass = height ? `${height}` : "";
	const roundedClass = rounded ? `rounded-${rounded}` : "";

	const classes = `${roundedClass} ${widthClass} ${heightClass} ${
		className ? className : ""
	}`;

	return <img src={src} alt={alt} className={classes} style={{ objectFit }} />;
};

export default Picture;
