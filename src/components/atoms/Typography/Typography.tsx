// Typography.tsx

import React from "react";
import styles from "./Typography.module.scss";
import { TypographyProps } from "../../../utils/type";

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
