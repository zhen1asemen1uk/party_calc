import React from "react";

import PopUp from "../reusable/PopUp";

import PartysConteiner from "../components/Partys/PartysConteiner";
import PartyConteiner from "../components/Party/PartyConteiner";

const Main: React.FC = () => {
	return (
		<>
			<PopUp title='+ Add party'>
				<PartyConteiner />
			</PopUp>

			<PopUp title='Partys'>
				<PartysConteiner />
			</PopUp>
		</>
	);
};

export default Main;
