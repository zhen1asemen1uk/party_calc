import React from "react";
import styled from "styled-components";

import { type ButtonProps } from "../types/resusable";

const WrappButton = styled.button<ButtonProps>`
	${({ pos }) => pos && `position: ${pos}`};
	${({ posT }) => posT && `top: ${posT}`};
	${({ posL }) => posL && `left: ${posL}`};
	${({ posR }) => posR && `right: ${posR}`};
	${({ posB }) => posB && `bottom: ${posB}`};

	display: flex;
	justify-content: center;
	align-items: center;

	padding: ${({ p }) => p ?? "0"};
	margin: ${({ m }) => m ?? "0"};

	background: ${({ bgColor, secondary }) =>
		bgColor ?? (secondary ? "transparent" : "#e2c32b")};

	border: ${({ secondary }) => (secondary ? "1px solid #494e5b" : "none")};
	border-radius: 5px;

	font-style: normal;
	font-weight: 600;

	text-align: center;
	letter-spacing: 0.75px;
	text-transform: uppercase;

	color: ${({ secondary }) => (secondary ? "#E2C32B" : "#494E5B")};

	transition: 0.2s;
	opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
	cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	:hover {
		background: ${({ disabled, secondary }) =>
			disabled && secondary
				? "transparent"
				: disabled
				? "#e2c32b"
				: secondary
				? "transparent"
				: "#FFE252"};

		color: ${({ disabled, secondary }) =>
			disabled && secondary
				? "E2C32B"
				: disabled
				? "#494E5B"
				: secondary
				? "#FFE252"
				: "#494E5B"};
	}

	:active {
		background: ${({ disabled, secondary }) =>
			disabled && secondary
				? "transparent"
				: disabled
				? "#e2c32b"
				: secondary
				? "transparent"
				: "#D8B300"};

		color: ${({ disabled, secondary }) =>
			disabled && secondary
				? "#E2C32B"
				: disabled
				? "#494E5B"
				: secondary
				? "#D8B300"
				: "#494E5B"};
	}

	height: ${({ h }) => h ?? "50px"};
	width: ${({ w }) => w ?? "200px"};
`;

const Button: React.FC<ButtonProps> = ({
	word = "Button",

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
	as = "button",
	type = "button",
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
			{word}
		</WrappButton>
	);
};

export default Button;
