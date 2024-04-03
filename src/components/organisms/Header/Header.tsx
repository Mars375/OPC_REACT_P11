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
		<header className='mb-12 mt-10'>
			<Picture src={logo} alt='SVG Logo' width='w-52' height='h-16' />
			<Navigation
				navLinks={navLinks}
				underline
				weight='bold'
				size='font-size-2xl'
			/>
		</header>
	);
};

export default Header;
