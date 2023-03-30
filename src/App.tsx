import React from "react";
import Button from "./reusable/Button";

import MainLayout from "./reusable/Layout";
import GlobalStyle from "./styles/globals";

const App: React.FC = () => {
	return (
		<MainLayout>
			<div>Hello world!</div>
			<Button word='Test' />

			<GlobalStyle />
		</MainLayout>
	);
};

export default App;
