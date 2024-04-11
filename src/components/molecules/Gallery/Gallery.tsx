import React, { useEffect, useRef, useState } from "react";
import Picture from "../../atoms/Picture/Picture";
import Arrow from "../../atoms/Arrow/Arrow";
import styles from "./Gallery.module.scss";
import Typography from "../../atoms/Typography/Typography";
import FadeLoader from "../../atoms/FadeLoader/FadeLoader";

interface Image {
	src: string;
	alt: string;
}
interface GalleryProps {
	images: Image[];
	className?: string;
}

const Gallery: React.FC<GalleryProps> = ({
	images,
	className = "rounded-xxl mb-3 h-custom2 overflow-hidden",
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const imageContainerRef = useRef<HTMLDivElement>(null);

	const handleRightArrowClick = () => {
		setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
		setIsLoading(true);
	};

	const handleLeftArrowClick = () => {
		setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
		setIsLoading(true);
	};

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	useEffect(() => {
		if (imageContainerRef.current) {
			imageContainerRef.current.style.transform = `translateX(-${
				currentImageIndex * 100
			}%)`;
		}
	}, [currentImageIndex]);

	return (
		<div className={`${className} ${styles.gallery}`}>
			{isLoading && <FadeLoader />}
			<div className={styles.imageContainer} ref={imageContainerRef}>
				{images.map((image, index) => (
					<Picture
						key={index}
						src={image.src}
						alt={image.alt}
						onLoad={handleImageLoad}
					/>
				))}
			</div>
			{images && images.length > 1 && (
				<>
					<div className={styles.rightArrow}>
						<Arrow
							direction='right'
							width={47}
							height={80}
							onClick={handleRightArrowClick}
						/>
					</div>
					<div className={styles.leftArrow}>
						<Arrow
							direction='left'
							width={47}
							height={80}
							onClick={handleLeftArrowClick}
						/>
					</div>
					<Typography
						tag='p'
						color='light'
						size='font-size-xl'
						weight='semibold'
						className='absolute--bottom-center'
					>
						{currentImageIndex + 1}/{images.length}
					</Typography>
				</>
			)}
		</div>
	);
};

export default Gallery;
