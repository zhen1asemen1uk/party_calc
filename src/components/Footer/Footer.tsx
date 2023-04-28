import React from "react";
import styled from "styled-components";

import { Wrapp } from "../../reusable/styles";

const Wrapper = styled(Wrapp)`
	height: 300px;

	padding: 25px 50px;

	border-top: 6px solid ${({ theme }) => theme.secondary};
	border-bottom: 3px solid ${({ theme }) => theme.secondary};
`;

const Footer: React.FC = () => {
	return <Wrapper>Footer</Wrapper>;
};

export default Footer;
