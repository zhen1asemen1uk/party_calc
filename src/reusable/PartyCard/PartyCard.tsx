import React from "react";
import styled from "styled-components";

import { Wrapp } from "../styles";
import { type IPartyProps } from "../../types/party";

const Wrapper = styled(Wrapp)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: 50px;
	padding: 0 50px;

	color: ${({ theme }) => theme.main};
`;

interface IPartyCard {
	party: IPartyProps | null;
}

const PartyCard: React.FC<IPartyCard> = ({ party }) => {
	return (
		<Wrapper>
			{party ? <h2>{party.title}</h2> : <h2>None any party</h2>}
		</Wrapper>
	);
};

export default PartyCard;
