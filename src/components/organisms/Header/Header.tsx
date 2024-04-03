import React from "react";
import "./Header.module.scss";
import Picture from "../../atoms/Picture/Picture";
import Navigation from "../../molecules/Navigation/Navigation";
import logo from "../../../assets/LOGO.png";

const Header: React.FC = () => {
	const navLinks = [
		{ link: "/", text: "Accueil" },
		{ link: "/About", text: "A propos" },
	];

	return (
		<header>
			<Picture
				src={logo}
				alt='SVG Logo'
				width='w-52'
				height='h-16'
				objectFit='fill'
			/>
			<Navigation navLinks={navLinks} underline weight='bold' size='xxl' />
		</header>
	);
};

export default Header;
