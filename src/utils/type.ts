export type TypographyProps = {
	tag?: keyof JSX.IntrinsicElements;
	color?: string;
	weight?: string;
	size?: string;
	children?: React.ReactNode;
	className?: string;
};

export type ImageProps = {
	src: string;
	alt: string;
	rounded?: string;
	width?: string;
	height?: string;
	objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
	className?: string;
};

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
	rounded?: string;
	color?: string;
	backgroundColor?: string;
	minWidth?: string;
	height?: string;
	children: React.ReactNode;
	className?: string;
};

export type DropdownProps = {
	locDropdown?: boolean;
	title: string;
	option: string | string[];
	titleStyle?: string;
	menuStyle?: string;
	maxWidth?: string;
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

export type ImageWithTextProps = {
	src: string;
	alt: string;
	text: string;
	imageWidth?: string;
	imageHeight?: string;
	rounded?: string;
	color?: string;
	weight?: string;
	textSize?: string;
	textClass?: string;
	className?: string;
	gradient?: string;
};

type NavLink = {
	link: string;
	text: string;
	underline?: boolean;
};

export type NavigationProps = {
	navLinks: NavLink[];
	underline?: boolean;
	color?: string;
	weight?: string;
	textSize?: string;
};
