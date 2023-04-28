import React, { useState } from "react";
import styled from "styled-components";

import { Wrapp } from "../../reusable/styles";

import PartysCards from "../../reusable/PartyCard/PartysCards";
import Button from "../../reusable/Button";

import { type IPartyProps } from "../../types/party";

const Wrapper = styled(Wrapp)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 0 50px;

	color: ${({ theme }) => theme.main};
`;

const Partys: React.FC = () => {
	const [partys, setPartys] = useState<IPartyProps[] | null>([
		{ title: `Test Event 1` },
		{ title: `Test Event 2` },
	]);

	return (
		<Wrapper>
			<PartysCards partys={partys} />
			<Button title={`Clear all`} onClick={() => setPartys(null)} />
		</Wrapper>
	);
};

export default Partys;
