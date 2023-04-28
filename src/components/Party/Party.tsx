import React, { useState } from "react";
import styled from "styled-components";

import { Col } from "../../reusable/styles";

import PartyCard from "../../reusable/PartyCard/PartyCard";
import Button from "../../reusable/Button";
import { type IPartyProps } from "../../types/party";

const Wrapper = styled(Col)`
	padding: 25px 50px;

	color: ${({ theme }) => theme.main};
`;

const Party: React.FC = () => {
	const [party, setParty] = useState<IPartyProps | null>({
		title: `Test party 2`,
	});

	return (
		<Wrapper>
			<PartyCard party={party} />

			<Button title={`Clear`} onClick={() => setParty(null)} />
		</Wrapper>
	);
};

export default Party;
