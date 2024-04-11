import React from "react";
import { TagProps } from "../../../utils/type";

const Tag: React.FC<TagProps> = ({
	rounded = "none",
	color = "primary",
	minWidth,
	height = "h-auto",
	children,
	backgroundColor = "bg-primary",
	className,
}) => {
	return (
		<div
			className={`rounded-${rounded} text-${color} ${minWidth} ${height} ${backgroundColor} ${className}`}
		>
			{children}
		</div>
	);
};

export default Tag;
