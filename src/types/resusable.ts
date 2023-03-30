export interface ButtonProps {
	onClick?: () => void;
	word: string;

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
	as?: React.ElementType;
	type?: string;
}
