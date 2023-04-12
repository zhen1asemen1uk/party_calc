import React from "react";
import styled from "styled-components";

import { type IPartyProps } from "../../types/party";
import { Wrapp } from "../../styles/styles";
import PartyCard from "./PartyCard";

const Wrapper = styled(Wrapp)`
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	/* height: 50px; */
	padding: 0 50px;

	color: white;

	background-color: green;
`;

interface IPartysCards {
	partys: IPartyProps[] | null;
}

const PartysCards: React.FC<IPartysCards> = ({ partys }) => {
	return (
		<Wrapper>
			{partys ? (
				partys.map((party, i) => {
					return (
						<React.Fragment key={`${party.title}_${i}`}>
							<PartyCard party={party} />
						</React.Fragment>
					);
				})
			) : (
				<h2>None any partys</h2>
			)}
		</Wrapper>
	);
};

export default PartysCards;
