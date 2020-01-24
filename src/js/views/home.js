import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		{/* <div className="emptyDiv" /> */}
		<main role="main" className="container">
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
				<Link to="/login/">
					<button className="btn btn-primary">login</button>
				</Link>
				<Link to="/signup/">
					<button className="btn btn-primary">sign up</button>
				</Link>
			</div>
		</main>
	</>
);
