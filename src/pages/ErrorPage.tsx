import { Link, useRouteError } from "react-router-dom";
import Loander from "../components/Loander";

interface RouteError {
	status: string;
	message: string;
	location: string;
}

const ErrorPage: React.FC = () => {
	const error = useRouteError() as RouteError;
	console.error(error && error);

	return (
		<div>
			<h1>Oops!</h1>

			<Loander />

			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error ? error?.status || error?.message : ``}</i>
			</p>
			<p>
				<Link to={`/`}>Go main</Link>
			</p>
		</div>
	);
};

export default ErrorPage;
