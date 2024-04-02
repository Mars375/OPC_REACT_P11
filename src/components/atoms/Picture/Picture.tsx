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
}

const Picture: React.FC<PictureProps> = ({
	src,
	alt,
	rounded = "none",
	width,
	height,
	objectFit = "cover",
}) => {
	const widthClass = width ? styles[width] : "";
	const heightClass = height ? styles[height] : "";

	const classes = `${styles.picture} ${styles[rounded]} ${widthClass} ${heightClass}`;

	return <img src={src} alt={alt} className={classes} style={{ objectFit }} />;
};

export default Picture;
