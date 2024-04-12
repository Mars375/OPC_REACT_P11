import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

interface DefaultTemplateProps {
	children: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='flex flex-column'>{children}</main>
			<Footer />
		</>
	);
};

export default DefaultTemplate;
