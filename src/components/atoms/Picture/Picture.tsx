import React, { ImgHTMLAttributes } from "react";
import { ImageProps } from "../../../utils/type";

interface PictureProps extends ImageProps {
	onLoad?: ImgHTMLAttributes<HTMLImageElement>["onLoad"];
}

const Picture: React.FC<PictureProps> = ({
	src,
	alt,
	rounded = "none",
	width = "w-full",
	height = "h-full",
	objectFit = "cover",
	className,
	onLoad,
}) => {
	return (
		<img
			src={src}
			alt={alt}
			className={`rounded-${rounded} ${width} ${height} ${className}`}
			style={{ objectFit }}
			onLoad={onLoad}
		/>
	);
};

export default Picture;
