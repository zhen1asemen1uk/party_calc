import React from "react";
import styled from "styled-components";

import { Wrapp } from "../../styles/styles";
import Logo from "./sections/Logo";
import { Link } from "react-router-dom";

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
						<Link to={`/party`}>+ Add Party</Link>
					</li>
					<li>
						<Link to={`/partys`}>Partys</Link>
					</li>
					<li>
						<Link to={`/login`}>Login</Link>
					</li>
				</UlStyled>
			</nav>
		</Wrapper>
	);
};

export default Header;
