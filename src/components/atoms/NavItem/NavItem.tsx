import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";

interface NavItemProps {
	link: string;
	active?: boolean;
	underline?: boolean;
	children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
	link,
	active,
	underline = true,
	children,
}) => {
	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
			}
		>
			{children}
		</NavLink>
	);
};

export default NavItem;
