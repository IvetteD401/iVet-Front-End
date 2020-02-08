import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		<section className="jumbotron lead text-center">
			<div className="container">
				<h1>
					<strong>iVet</strong>{" "}
				</h1>
				<h3>
					{'"'}Your one stop shop for all of your dogs health needs!{'"'}
				</h3>
			</div>
		</section>

		<section className="jumbotron lead text-center mx-auto">
			<div className="card" style={{ maxWidth: "100%" }}>
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
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div className="emptyDiv" />
		<section className="jumbotron lead text-center">
			<div className="card" style={{ maxWidth: "100%" }}>
				<div className="row no-gutters">
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<img
							src="https://avatars3.githubusercontent.com/u/57875480?s=460&v=4"
							className="card-img"
							alt="..."
						/>
					</div>
				</div>
			</div>
		</section>
		<div className="emptyDiv" />
		<section className="jumbotron lead text-center">
			<div className="card" style={{ maxWidth: "100%" }}>
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
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div className="emptyDiv" />
		<section className="jumbotron lead text-center"></section>
		<div className="emptyDiv" />
		<div className="emptyDiv" />
		<section className="jumbotron lead text-center">
			<Link to="/ivethome/">
				<button className="btn lg btn-dark my-2">Lets Start Here</button>
			</Link>
		</section>
	</>
);
