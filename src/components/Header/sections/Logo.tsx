import React from "react";
import styled from "styled-components";

import { FlexBlock } from "../../../styles/styles";

const Wrapp = styled(FlexBlock)`
	cursor: pointer;
`;

const Logo: React.FC = () => {
	return <Wrapp>You logo</Wrapp>;
};

export default Logo;
