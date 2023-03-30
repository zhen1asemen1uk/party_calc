import React from "react";

import styled from "styled-components";

import FooterConteiner from "../components/Footer/FooterConteiner";
import HeaderConteiner from "../components/Header/HeaderConteiner";

import { Col } from "../styles/styles";

import { type MainLayoutProps } from "../types/components";

const Wrapp = styled(Col)``;

const Main = styled.div`
	flex: 1 1 auto;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<Wrapp minH='100vh'>
			<HeaderConteiner />
			<Main>{children}</Main>
			<FooterConteiner />
		</Wrapp>
	);
};

export default MainLayout;
