import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<>
		<div className="emptyDiv" />
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
		</main>
	</>
);
