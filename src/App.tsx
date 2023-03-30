import React from "react";
import { Link } from "react-router-dom";
import { Col } from "./styles/styles";

const App: React.FC = () => {
	return (
		<Col p='10px'>
			<div>Hello world!</div>

			<br />
			<Link to={`/main`}>main</Link>
			<br />
			<Link to={`/party_room`}>party_room</Link>
			<br />
		</Col>
	);
};

export default App;
