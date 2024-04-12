import React from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../atoms/";
import { Navigation } from "../../molecules/";
import logo from "../../../assets/LOGO.png";

const Header: React.FC = () => {
	const navLinks = [
		{ link: "/", text: "Accueil" },
		{ link: "/About", text: "A propos" },
	];

	return (
		<header className='xs:p-6 md:pb-12 flex justify-between'>
			<Link to='/'>
				<h1 className='xs:w-36 md:w-52 xs:h-12 md:h-16'>
					<Picture src={logo} alt='SVG Logo' />
				</h1>
			</Link>
			<Navigation
				navLinks={navLinks}
				underline
				weight='xs:font-medium md:font-bold'
				textSize='xs:font-size-xs md:font-size-2xl xs:text-uppercase md:text-capitalize'
			/>
		</header>
	);
};

export default Header;
