import React, { useState } from "react";
import Picture from "../../atoms/Picture/Picture";

type GalleryProps = {
	images: string[];
	className?: string;
};

const Gallery: React.FC<GalleryProps> = ({ images, className }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleLeftArrowClick = () => {
		setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleRightArrowClick = () => {
		setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return <></>;
};

export default Gallery;
