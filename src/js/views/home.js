import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		{/* <div className="emptyDiv" /> */}

		<section className="jumbotron text-center">
			<div className="container">
				<h1>Album example</h1>
				<p className="lead text-muted">
					Something short and leading about the collection below—its contents, the creator, etc. Make it short
					and sweet, but not too short so folks don’t simply skip over it entirely.
				</p>
				<p>
					<a href="#" className="btn btn-primary my-2">
						New Doggufact!
					</a>
				</p>
				<Link to="/login/">
					<button className="btn btn-primary my-2">login</button>
				</Link>
				<Link to="/signup/">
					<button className="btn btn-secondary my-2">sign up</button>
				</Link>
			</div>
		</section>
	</>
);
