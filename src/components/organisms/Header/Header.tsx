import React from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../atoms/";
import { Navigation } from "../../molecules/";
import logo from "../../../assets/LOGO.png";

import "./Header.module.scss";

const Header: React.FC = () => {
	const navLinks = [
		{ link: "/", text: "Accueil" },
		{ link: "/About", text: "A propos" },
	];

	return (
		<header className='pb-12'>
			<Link to='/'>
				<h1 className='xs:w-36 xs:h-12'>
					<Picture src={logo} alt='SVG Logo' />
				</h1>
			</Link>
			<Navigation
				navLinks={navLinks}
				underline
				weight='xs:font-medium lg:font-bold'
				textSize='sm:font-size-xs lg:font-size-2xl'
			/>
		</header>
	);
};

export default Header;
