import React, { useState } from "react";
import { DropdownProps } from "../../../utils/type";
import styles from "./Dropdown.module.scss";
import { Typography, Arrow } from "../../atoms/";

const Dropdown: React.FC<DropdownProps> = ({
	locDropdown = true,
	title,
	option,
	titleStyle = "font-size-base text-light font-weight-bold bg-primary p-4",
	menuStyle = "bg-secondary line-height-custom ",
	maxWidth = "max-w-dropdown",
	rounded = "sm",
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`${
				locDropdown ? styles.dropdown : ""
			} ${maxWidth} rounded-${rounded} ${className}`}
		>
			<h3
				onClick={toggleDropdown}
				className={`${titleStyle} rounded-${rounded} flex justify-between cursor-pointer`}
			>
				{title}
				<Arrow direction={isOpen ? "down" : "up"} />
			</h3>
			<div
				className={`${styles.dropdownMenu} ${menuStyle} ${
					isOpen ? styles.open : ""
				}`}
			>
				{Array.isArray(option) ? (
					<ul className='p-5'>
						{option.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				) : (
					<Typography tag='p' className='p-5'>
						{option}
					</Typography>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
