import React from "react";
import styled from "styled-components";

import { Wrapp } from "../../styles/styles";
import Logo from "./sections/Logo";

const Wrapper = styled(Wrapp)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: 50px;
	padding: 0 50px;

	color: white;

	background-color: green;
`;

const UlStyled = styled.ul`
	display: flex;
	gap: 20px;
`;

const Header: React.FC = () => {
	return (
		<Wrapper>
			<Logo />
			<nav>
				<UlStyled>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</UlStyled>
			</nav>
		</Wrapper>
	);
};

export default Header;
