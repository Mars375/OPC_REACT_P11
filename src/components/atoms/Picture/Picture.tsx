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
	return (
		<img
			src={src}
			alt={alt}
			className={`rounded-${rounded} ${width} ${height} ${className}`}
			style={{ objectFit }}
		/>
	);
};

export default Picture;
