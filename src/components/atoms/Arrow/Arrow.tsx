import React from "react";
import styles from "./Arrow.module.scss";

interface ArrowProps {
	height?: number;
	width?: number;
	color?: string;
	direction: "left" | "right" | "up" | "down";
}

const Arrow: React.FC<ArrowProps> = ({
	height = 15,
	width = 24,
	color = "#fff",
	direction,
}) => {
	return (
		<svg
			className={`${styles.arrow} ${styles[direction]}`}
			width={width}
			height={height}
			viewBox='0 0 24 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10.7897 1.43154C11.4591 0.762119 12.5462 0.762119 13.2157 1.43154L23.4979 11.7138C24.1674 12.3832 24.1674 13.4704 23.4979 14.1398C22.8285 14.8092 21.7414 14.8092 21.072 14.1398L12 5.06782L2.92804 14.1344C2.25862 14.8039 1.17148 14.8039 0.502064 14.1344C-0.167355 13.465 -0.167355 12.3779 0.502064 11.7085L10.7843 1.42618L10.7897 1.43154Z'
				fill={color}
			/>
		</svg>
	);
};

export default Arrow;
