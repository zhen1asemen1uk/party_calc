import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapp } from "../../reusable/styles";
import Logo from "./sections/Logo";

const Wrapper = styled(Wrapp)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: 50px;
	padding: 0 50px;

	color: ${({ theme }) => theme.secondary};

	background: ${({ theme }) => theme.main};

	border-top: 2px solid ${({ theme }) => theme.secondary};
	border-bottom: 6px solid ${({ theme }) => theme.secondary};
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
