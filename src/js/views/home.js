import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		{/* <div className="emptyDiv" /> */}
		<main role="main" className="container">
			<h4>Herroo, User!!!</h4>
			<p className="lead">
				<h2>Daily Dogfacts.</h2>
				<h2>
					Let
					{"'"}s see how {'"'}
					Oreo
					{'"'} is doing...
					<p>Notifications.</p>
				</h2>
				<h2>Special Instructions.</h2>
			</p>
			<Link to="/login/">
				<button className="btn btn-primary">login</button>
			</Link>
		</main>
	</>
);
