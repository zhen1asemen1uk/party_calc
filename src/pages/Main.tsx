import React from "react";

import PopUp from "../reusable/PopUp";

import Partys from "../components/Partys/Partys";
import Party from "../components/Party/Party";
import AddParty from "../components/Party/sections/AddParty";
import { Link } from "react-router-dom";
import { Col } from "../reusable/styles";
import Button from "../reusable/Button";

const Main: React.FC = () => {
	return (
		<Col g={`10px`} m={`10px 50px`}>
			<Button title={`123`} />
			<Button title={`321`} secondary />

			<PopUp title='+ Add party'>
				<AddParty />
			</PopUp>
			<PopUp title='Party page'>
				<Party />
			</PopUp>
			<PopUp title='All Partys'>
				<Partys />
			</PopUp>

			<Link to={`/main`}>Qr</Link>
		</Col>
	);
};

export default Main;
