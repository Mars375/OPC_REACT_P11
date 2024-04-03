import React from "react";
import styles from "./NavItem.module.scss";

interface NavItemProps {
	link: string;
	active?: boolean;
	underline?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
	link,
	active,
	underline = true,
	onClick,
	children,
}) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<a
			href={link}
			className={`${styles.navItem} ${active ? styles.active : ""} ${
				underline ? styles.underline : ""
			}`}
			onClick={handleClick}
		>
			{children}
		</a>
	);
};

export default NavItem;
