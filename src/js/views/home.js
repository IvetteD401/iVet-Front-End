import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		{/* <div className="emptyDiv" /> */}

		<section className="jumbotron text-center">
			<div className="container">
				<br />
				<br />
				<br />
				<br />
				<h1>
					<strong>
						{'"'}Your one stop shop for all of your dogs health needs!{'"'}
					</strong>
				</h1>
				<br />
				{/* <br /> */}
				{/* <br /> */}
				{/* <br /> */}
				<br />
				<br />
				{/* <p>
					<a href="#" className="btn btn-primary my-2">
						New Doggufact!
					</a>
				</p> */}
				<Link to="/login/">
					<button className="btn lg btn-primary my-2">Login Here</button>
				</Link>
				<br />
				<Link to="/signup/">Not yet a member, create a new account!</Link>
			</div>
		</section>
	</>
);
