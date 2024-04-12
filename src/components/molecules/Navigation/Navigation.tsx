// Navigation.tsx
import React from "react";
import { Typography, NavItem } from "../../atoms/";
import { NavigationProps } from "../../../utils/type";

const Navigation: React.FC<NavigationProps> = ({
	navLinks,
	underline = false,
	weight,
	textSize,
	color,
}) => {
	return (
		<nav className='flex justify-center items-center'>
			<ul className='xs:gap-7 lg:gap-14 flex'>
				{navLinks.map((link, index) => (
					<NavItem key={index} link={link.link} underline={underline}>
						<Typography color={color} weight={weight} size={textSize}>
							{link.text}
						</Typography>
					</NavItem>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
