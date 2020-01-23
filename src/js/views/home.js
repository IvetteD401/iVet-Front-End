import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { DogFacts } from "../component/dogFacts";

export const Home = () => (
	<>
		{/* <div className="emptyDiv" /> */}
		<main role="main" className="container">
			<div className="greeting">
				<DogFacts />
				<h1>Herroo!!!</h1>
			</div>
			<h2>Let us see how Oreo is doing...</h2>
			<p>Notifications.</p>
			<h2>Special Instructions.</h2>
			<p className="lead"></p>
			<Link to="/login/">
				<button className="btn btn-primary">login</button>
			</Link>
		</main>
	</>
);
