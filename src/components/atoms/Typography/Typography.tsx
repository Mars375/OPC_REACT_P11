import React from "react";
import { TypographyProps } from "../../../utils/type";

export const Typography: React.FC<TypographyProps> = ({
	tag: Tag = "p",
	color = "dark",
	weight = "font-regular",
	size = "font-size-md",
	children,
	className,
}) => {
	const classes = `text-${color} ${weight} ${size} ${className}`;

	return <Tag className={classes}>{children}</Tag>;
};
