import React from "react";
import styles from "./Picture.module.scss";
import { WidthType, HeightType } from "../../../utils/enum";

interface PictureProps {
	src: string;
	alt: string;
	rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
	width?: WidthType;
	height?: HeightType;
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
	className?: string;
}

const Picture: React.FC<PictureProps> = ({
	src,
	alt,
	rounded = "none",
	width,
	height,
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
