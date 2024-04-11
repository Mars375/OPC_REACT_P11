import React from "react";
import Star from "../../atoms/Star/Star";

type RatingStarsProps = {
	rating: number;
	totalStars?: number;
	color?: string;
	size?: string;
	space?: string;
};

const RatingStars: React.FC<RatingStarsProps> = ({
	rating,
	totalStars = 5,
	color = "primary",
	size = "1em",
	space = "0.25em",
}: RatingStarsProps) => {
	const stars = [];

	for (let i = 0; i < totalStars; i++) {
		if (i < rating) {
			stars.push(
				<span key={i} className={`${color} ${size} ${space}`}>
					<Star fill={color === "primary" ? "#ff6060" : ""} />
				</span>
			);
		} else {
			stars.push(
				<span key={i} className={`${color} ${size} ${space}`}>
					<Star fill='#ddd' />
				</span>
			);
		}
	}

	return <div>{stars}</div>;
};

export default RatingStars;
