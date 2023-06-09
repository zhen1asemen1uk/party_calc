import React from "react";

import styled from "styled-components";

import { Col } from "./styles";

import { type MainLayoutProps } from "../types/components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Wrapp = styled(Col)``;

const Main = styled.div`
	flex: 1 1 auto;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<Wrapp minH='100vh'>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Wrapp>
	);
};

export default MainLayout;
