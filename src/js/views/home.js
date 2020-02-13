import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		<section className="jumbotron lead leadLogo mx-auto text-center">
			<div className="container">
				<br />

				<h1>
					<strong>i-Vet</strong>{" "}
				</h1>
				<h3>
					{'"'}Your one stop shop for all of your dogs health needs!{'"'}
				</h3>
			</div>
		</section>
		<section className="jumbotron homeJumbo resize lead text-center mx-auto">
			<div className="card about resize mx-auto" style={{ maxWidth: "100%" }}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img
							src="https://avatars3.githubusercontent.com/u/57875480?s=460&v=4"
							className="card-img"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">
								<strong>Ivette Dominguez</strong>
							</h2>
							<h4>
								<p className="card-text">
									<strong>Full Stack Web Developer</strong>
									<br /> Project Manager - Lead Project Developer
								</p>
							</h4>
							<h6>
								<p>
									{" "}
									Technologies used: Python, Raspberry Pi, MySQL,
									<br /> JavaScript, ReactJS, Bootstrap
								</p>
							</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="jumbotron homeJumbo resize lead text-center mx-auto">
			<div className="card about resize mx-auto" style={{ maxWidth: "100%" }}>
				<div className="row no-gutters">
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">
								<strong>Antuan Frayman</strong>
							</h2>
							<h4>
								<p className="card-text">
									<strong>Full Stack Web Developer</strong>
									<br />
								</p>
							</h4>
							<br />

							<br />
							<h6>
								<p>
									{" "}
									Technologies used: Python, Raspberry Pi, MySQL,
									<br /> JavaScript, ReactJS, Bootstrap
								</p>
							</h6>
						</div>
					</div>
					<div className="col-md-4">
						<img
							src="https://avatars1.githubusercontent.com/u/57456107?s=400&u=4fe460aaaa3bca0965c58477bf313979d30a8555&v=4"
							className="card-img"
							alt="..."
						/>
					</div>
				</div>
			</div>
		</section>

		<section className="jumbotron lead leadLogo startLink mx-auto text-center">
			<br />

			<Link to="/ivethome/">
				<button className="btn lg btn-success">Start Here</button>
			</Link>
		</section>
	</>
);
