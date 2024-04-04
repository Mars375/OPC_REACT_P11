// Navigation.tsx
import React from "react";
import NavItem from "../../atoms/NavItem/NavItem";
import Typography from "../../atoms/Typography/Typography";
import styles from "./Navigation.module.scss";
import { TypographyProps } from "../../../utils/type";

interface NavLink {
	link: string;
	text: string;
	underline?: boolean;
}

interface NavigationProps {
	navLinks: NavLink[];
	underline?: boolean;
	color?: TypographyProps["color"];
	weight?: TypographyProps["weight"];
	size?: TypographyProps["size"];
}

const Navigation: React.FC<NavigationProps> = ({
	navLinks,
	underline = false,
	weight,
	size,
	color,
}) => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{navLinks.map((link, index) => (
					<NavItem key={index} link={link.link} underline={underline}>
						<Typography color={color} weight={weight} size={size}>
							{link.text}
						</Typography>
					</NavItem>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
