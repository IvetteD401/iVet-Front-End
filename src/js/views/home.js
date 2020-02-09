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

		<section className="jumbotron homeJumbo lead text-center mx-auto">
			<div className="card about" style={{ maxWidth: "100%" }}>
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
									<strong>
										Motivated and resourceful individual capable of providing the highest quality of
										support with excellent organizational skills that allow to work productively in
										a fast-paced environment without direct supervision.
									</strong>
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="jumbotron homeJumbo lead text-center">
			<div className="card about" style={{ maxWidth: "100%" }}>
				<div className="row no-gutters">
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">
								<strong>Antuan Freyman</strong>
							</h2>
							<h4>
								<strong>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
								</strong>
							</h4>
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

		<section className="jumbotron homeJumbo lead text-center">
			<div className="card about" style={{ maxWidth: "100%" }}>
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
								<strong>Jose Padron</strong>
							</h2>
							<h4>
								<strong>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
								</strong>
							</h4>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="jumbotron lead leadLogo startLink mx-auto text-center">
			<br />
			{/* <br /> */}
			<Link to="/ivethome/">
				<button className="btn lg btn-success">Start Here</button>
			</Link>
		</section>
		<i className="fa fa-long-arrow-up float-right"></i>
	</>
);
