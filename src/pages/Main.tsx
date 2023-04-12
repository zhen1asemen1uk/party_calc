import React from "react";

import PopUp from "../reusable/PopUp";

import Partys from "../components/Partys/Partys";
import Party from "../components/Party/Party";
import AddParty from "../components/Party/sections/AddParty";

const Main: React.FC = () => {
	return (
		<>
			<PopUp title='+ Add party'>
				<AddParty />
			</PopUp>

			<PopUp title='Party page'>
				<Party />
			</PopUp>

			<PopUp title='All Partys'>
				<Partys />
			</PopUp>
		</>
	);
};

export default Main;
