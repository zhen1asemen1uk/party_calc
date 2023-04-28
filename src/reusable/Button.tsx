import React from "react";
import styled from "styled-components";

import { type ButtonProps } from "../types/resusable";

const WrappButton = styled.button<ButtonProps>`
	position: relative;
	top: -5px;
	left: -5px;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: ${({ p }) => p ?? `0`};
	margin: ${({ m }) => m ?? `0`};

	background: ${({ bgColor, secondary, theme }) =>
		bgColor ?? (secondary ? theme.main : theme.main)};

	border: ${({ secondary, theme }) =>
		secondary
			? `2px solid ${theme.secondary}`
			: `2px solid ${theme.secondary}`};

	box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
		5px 5px 0px 0px;

	font-style: normal;
	font-weight: 600;

	text-align: center;
	letter-spacing: 0.75px;
	text-transform: uppercase;

	color: ${({ secondary, theme }) =>
		secondary ? `${theme.secondary}` : `${theme.secondary}`};

	transition: 0.2s;
	opacity: ${({ disabled }) => (disabled ? `0.5` : `1`)};
	cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	:hover {
		top: -4.5px;
		left: -4.5px;

		background: ${({ disabled, secondary, theme }) =>
			disabled && secondary
				? `transparent`
				: disabled
				? `transparent`
				: secondary
				? `${theme.main}`
				: `${theme.main}`};

		color: ${({ disabled, secondary, theme }) =>
			disabled && secondary
				? `silver`
				: disabled
				? `silver`
				: secondary
				? `${theme.secondary}`
				: `${theme.secondary}`};

		box-shadow: ${({ disabled, secondary }) =>
			disabled && secondary
				? `none`
				: disabled
				? `none`
				: secondary
				? `1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px`
				: `1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px`};
	}

	:active {
		top: 0;
		left: 0;

		border: ${({ secondary, theme }) =>
			secondary ? `2px solid ${theme.main}` : `2px solid theme.secondary`};

		background: ${({ disabled, secondary, theme }) =>
			disabled && secondary
				? `silver`
				: disabled
				? `silver`
				: secondary
				? `${theme.main}`
				: `${theme.main}`};

		color: ${({ disabled, secondary, theme }) =>
			disabled && secondary
				? `silver`
				: disabled
				? `silver`
				: secondary
				? `${theme.secondary}`
				: `${theme.secondary}`};

		box-shadow: ${({ disabled, secondary }) =>
			disabled && secondary
				? `none`
				: disabled
				? `none`
				: secondary
				? `none`
				: `0 0 0 0`};
	}

	height: ${({ h }) => h ?? `50px`};
	width: ${({ w }) => w ?? `200px`};
`;

const Button: React.FC<ButtonProps> = ({
	title = `Button`,

	onClick,

	pos,
	posT,
	posL,
	posR,
	posB,

	secondary,

	h,
	w,
	p,
	m,

	disabled,
	bgColor,
	as = `button`,
	type = `button`,
}) => {
	return (
		<WrappButton
			pos={pos}
			posT={posT}
			posL={posL}
			posR={posR}
			posB={posB}
			h={h}
			w={w}
			p={p}
			m={m}
			secondary={secondary}
			disabled={disabled}
			bgColor={bgColor}
			as={as}
			type={type}
			onClick={onClick}>
			{title}
		</WrappButton>
	);
};

export default Button;
