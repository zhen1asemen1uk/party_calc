import { type SetStateAction, type ChangeEvent, type Dispatch } from "react";

export interface FlexProps {
	pos?: string;
	posT?: string;
	posL?: string;
	posR?: string;
	posB?: string;
	d?: string;
	fd?: string;
	jc?: string;
	ai?: string;
	p?: string;
	m?: string;
	w?: string;
	minW?: string;
	maxW?: string;
	h?: string;
	minH?: string;
	maxH?: string;
	bg?: string;
	c?: string;
	g?: string;
}

export interface ButtonProps {
	onClick?: () => void;
	title: string;

	pos?: string;
	posT?: string;
	posL?: string;
	posR?: string;
	posB?: string;

	secondary?: boolean;

	h?: string;
	w?: string;
	p?: string;
	m?: string;

	disabled?: boolean;
	bgColor?: string;
	c?: string;
	as?: React.ElementType;
	type?: string;

	children?: React.ReactElement;
}
export interface InputProps {
	onClick?: () => void;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

	title?: string;

	value: string;
	setValue?: Dispatch<SetStateAction<string>>;

	secondary?: boolean;

	pos?: string;
	posT?: string;
	posL?: string;
	posR?: string;
	posB?: string;

	h?: string;
	w?: string;
	p?: string;
	m?: string;

	bgColor?: string;
	c?: string;

	placeholder?: string;

	disabled?: boolean;
}

export interface ITheme {
	main: string;
	secondary: string;
}
