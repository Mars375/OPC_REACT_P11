import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./components/pages/HomePage/HomePage";

test("renders learn react link", () => {
	render(<HomePage />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
