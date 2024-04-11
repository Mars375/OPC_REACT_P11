import { WidthType, HeightType, MinWidthType, MaxWidthType } from "./enum";

export type TypographyProps = {
	tag?: keyof JSX.IntrinsicElements;
	color?: "primary" | "secondary" | "light" | "dark";
	weight?: "light" | "regular" | "medium" | "semibold" | "bold";
	size?:
		| "font-size-xs"
		| "font-size-sm"
		| "font-size-base"
		| "font-size-lg"
		| "font-size-xl"
		| "font-size-2xl"
		| "font-size-3xl"
		| "font-size-4xl"
		| "font-size-custom";
	children?: React.ReactNode;
	className?: string;
};

export type ImageProps = {
	src: string;
	alt: string;
	rounded?:
		| "none"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "xxl"
		| "xxxl"
		| "custom"
		| "full";
	width?: WidthType;
	height?: HeightType;
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
	className?: string;
};

export type TextPosition =
	| "center"
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right";

export type LocationType = {
	id: string;
	title: string;
	cover: string;
	pictures: string[];
	description: string;
	host: {
		name: string;
		picture: string;
	};
	rating: string;
	location: string;
	equipments: string[];
	tags: string[];
};

export type TagProps = {
	rounded?:
		| "none"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "xxl"
		| "xxxl"
		| "custom"
		| "full";
	color?: "primary" | "secondary" | "light" | "dark";
	backgroundColor?: "primary" | "secondary" | "light" | "dark";
	minWidth?: MinWidthType;
	height?: HeightType;
	children: React.ReactNode;
	className?: string;
};

export type DropdownProps = {
	locDropdown?: boolean;
	title: string;
	option: string | string[];
	titleStyle?: string;
	menuStyle?: string;
	maxWidth?: MaxWidthType;
	rounded?:
		| "none"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "xxl"
		| "xxxl"
		| "custom"
		| "full";
	className?: string;
};
