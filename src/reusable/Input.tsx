import React, { type ChangeEvent } from "react";
import styled from "styled-components";

import { type InputProps } from "../types/resusable";
import { FlexBlock } from "./styles";

const InputStyled = styled.input<InputProps>`
	${({ pos }) => pos && `position: ${pos}`};
	${({ posT }) => posT && `top: ${posT}`};
	${({ posL }) => posL && `left: ${posL}`};
	${({ posR }) => posR && `right: ${posR}`};
	${({ posB }) => posB && `bottom: ${posB}`};

	display: flex;
	justify-content: center;
	align-items: center;

	padding: ${({ p }) => p ?? `0 5px`};
	margin: ${({ m }) => m ?? `0`};

	background: ${({ bgColor, secondary, theme }) =>
		bgColor ?? (secondary ? `transparent` : theme.main)};

	border: ${({ secondary }) => (secondary ? `1px solid #494e5b` : `none`)};
	border-radius: 5px;

	font-style: normal;
	font-weight: 600;

	text-align: left;
	letter-spacing: 0.75px;
	text-transform: uppercase;

	color: ${({ secondary }) => (secondary ? `#E2C32B` : `#494E5B`)};

	transition: 0.2s;
	opacity: ${({ disabled }) => (disabled ? `0.5` : `1`)};
	cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	/* :hover {
		background: ${({ disabled, secondary }) =>
		disabled && secondary
			? `transparent`
			: disabled
			? `#e2c32b`
			: secondary
			? `transparent`
			: `#FFE252`};

		color: ${({ disabled, secondary }) =>
		disabled && secondary
			? `E2C32B`
			: disabled
			? `#494E5B`
			: secondary
			? `#FFE252`
			: `#494E5B`};
	}

	:active {
		background: ${({ disabled, secondary }) =>
		disabled && secondary
			? `transparent`
			: disabled
			? `#e2c32b`
			: secondary
			? `transparent`
			: `#D8B300`};

		color: ${({ disabled, secondary }) =>
		disabled && secondary
			? `#E2C32B`
			: disabled
			? `#494E5B`
			: secondary
			? `#D8B300`
			: `#494E5B`};
	} */

	height: ${({ h }) => h ?? `50px`};
	width: ${({ w }) => w ?? `200px`};

	outline: none;
`;

const Input: React.FC<InputProps> = ({
	onClick,

	title,

	value,
	setValue,

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
	placeholder = `placeholder`,
}) => {
	return (
		<FlexBlock
			pos={pos}
			posT={posT}
			posL={posL}
			posR={posR}
			posB={posB}
			h={h}
			w={w}
			p={p}
			m={m}
			onClick={onClick}>
			{title}
			<InputStyled
				secondary={secondary}
				disabled={disabled}
				bgColor={bgColor}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue?.(e.target.value)
				}
				placeholder={placeholder}
			/>
		</FlexBlock>
	);
};

export default Input;
