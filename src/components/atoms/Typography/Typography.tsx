// Typography.tsx

import React from "react";
import styles from "./Typography.module.scss";

interface TypographyProps {
	tag: keyof JSX.IntrinsicElements;
	color?: "primary" | "secondary" | "accent";
	weight?: "light" | "regular" | "medium" | "semibold" | "bold";
	size?: "small" | "medium" | "large" | "xl" | "xxl" | "xxxl";
	children?: React.ReactNode;
	className?: string;
}

const Typography: React.FC<TypographyProps> = ({
	tag,
	color,
	weight,
	size,
	children,
	className,
}) => {
	const Tag = tag as keyof JSX.IntrinsicElements;

	const classes = `${styles.typography} ${color ? styles[color] : ""} ${
		weight ? styles[weight] : ""
	} ${size ? styles[size] : ""} ${className}`;

	return <Tag className={classes}>{children}</Tag>;
};

export default Typography;
