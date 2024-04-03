// Typography.tsx

import React from "react";
import styles from "./Typography.module.scss";

interface TypographyProps {
	tag?: keyof JSX.IntrinsicElements;
	color?: "primary" | "secondary" | "white" | "dark";
	weight?: "light" | "regular" | "medium" | "semibold" | "bold";
	size?:
		| "font-size-xs"
		| "font-size-sm"
		| "font-size-base"
		| "font-size-lg"
		| "font-size-xl"
		| "font-size-2xl"
		| "font-size-3xl"
		| "font-size-custom";
	children?: React.ReactNode;
	className?: string;
}

const Typography: React.FC<TypographyProps> = ({
	tag = "span",
	color = "dark",
	weight,
	size,
	children,
	className,
}) => {
	const Tag = tag as keyof JSX.IntrinsicElements;

	const classes = `${styles.typography} ${color ? styles[color] : ""} ${
		weight ? styles[weight] : ""
	} ${size ? size : ""} ${className ? className : ""}`;

	return <Tag className={classes}>{children}</Tag>;
};

export default Typography;
