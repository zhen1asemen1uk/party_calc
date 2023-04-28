import React, { type Dispatch, type SetStateAction, type FC } from "react";
import styled from "styled-components";

const FlipConteiner = styled.li`
	.tgl {
		display: none;

		+ .tgl-btn {
			display: block;

			min-width: 50px;
			width: fit-content;
			height: 2em;
			position: relative;
			cursor: pointer;
			user-select: none;
			&:after,
			&:before {
				position: relative;
				display: block;
				content: "";
				width: 50%;
				height: 100%;
			}
		}
	}

	.tgl-flip {
		+ .tgl-btn {
			perspective: 100px;

			&:after,
			&:before {
				position: absolute;
				top: 0;
				left: 0;

				min-width: 50px;
				width: fit-content;

				padding: 0 5px;

				line-height: 2em;
				text-align: center;
				font-weight: 800;
				color: ${({ theme }) => theme.main};

				backface-visibility: hidden;
				border-radius: 4px;

				transition: all 0.4s ease;
			}

			&:after {
				content: attr(data-tg-on);

				background: ${({ theme }) => theme.main};
				border: 1px solid ${({ theme }) => theme.secondary};
				transform: rotateY(-180deg);
			}

			&:before {
				background: ${({ theme }) => theme.secondary};
				border: 1px solid ${({ theme }) => theme.main};
				content: attr(data-tg-off);
			}

			&:active:before {
				transform: rotateY(-20deg);
			}
		}

		&:checked + .tgl-btn {
			&:before {
				transform: rotateY(180deg);
			}

			&:after {
				transform: rotateY(0);
				left: 0;
				background: ${({ theme }) => theme.main};
				border: 1px solid ${({ theme }) => theme.secondary};
			}

			&:active:after {
				transform: rotateY(20deg);
			}
		}
	}
`;

interface IFlip {
	frontSide: string;
	backSide: string;
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
}

const Flip: FC<IFlip> = ({
	frontSide = `frontSide`,
	backSide = `backSide`,
	value,
	setValue,
}) => {
	return (
		<FlipConteiner>
			<input
				className='tgl tgl-flip'
				id='cb5'
				type='checkbox'
				defaultChecked={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setValue(!!e.target.value)
				}
			/>
			<label
				className='tgl-btn'
				data-tg-off={backSide}
				data-tg-on={frontSide}
				htmlFor='cb5'
			/>
		</FlipConteiner>
	);
};

export default Flip;
