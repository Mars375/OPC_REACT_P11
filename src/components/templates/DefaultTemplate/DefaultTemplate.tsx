import React from "react";
import Header from "../../organisms/Header/Header";
import "./DefaultTemplate.module.scss";

interface DefaultTemplateProps {
	children: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default DefaultTemplate;
