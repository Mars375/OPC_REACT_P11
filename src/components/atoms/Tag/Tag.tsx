import React from "react";

type TagProps = {
	rounded?:
		| "none"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "xxl"
		| "xxxl"
		| "custom"
		| "full";
	color?: string;
	backgroundColor?: string;
	width?: string;
	height?: string;
	children: React.ReactNode;
	className?: string;
};

const Tag: React.FC<TagProps> = ({
	rounded = "none",
	color = "primary",
	width = "w-auto",
	height = "h-auto",
	children,
	backgroundColor = "bg-primary",
	className,
}) => {
	return (
		<div
			className={`rounded-${rounded} text-${color} ${width} ${height} ${backgroundColor} ${className}`}
		>
			{children}
		</div>
	);
};

export default Tag;
