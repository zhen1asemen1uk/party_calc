import React from "react";
import styled from "styled-components";

import { Wrapp } from "../../styles/styles";

const Wrapper = styled(Wrapp)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: 50px;
	padding: 0 50px;

	color: white;

	background-color: green;
`;

const Partys: React.FC = () => <Wrapper>{`It's Partys`}</Wrapper>;

export default Partys;
