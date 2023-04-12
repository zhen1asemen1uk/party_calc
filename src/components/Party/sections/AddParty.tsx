import React, { useState } from "react";
import styled from "styled-components";

import { Col } from "../../../styles/styles";
import Input from "../../../reusable/Input";
import Button from "../../../reusable/Button";

const Wrapper = styled(Col)`
	padding: 25px 50px;

	color: white;

	background-color: green;
`;

const AddParty: React.FC = () => {
	const [title, setTitle] = useState<string>(``);

	return (
		<Wrapper>
			<Input
				value={title}
				setValue={setTitle}
				placeholder='Party name'
				m='10px 0'
			/>

			<Button title={`Add`} />
		</Wrapper>
	);
};

export default AddParty;
