import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Tracker = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="album py-5 bg-light">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<svg
									className="bd-placeholder-img card-img-top"
									width="100%"
									height={225}
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
									aria-label="Placeholder: Thumbnail">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c" />
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Body Mass Index (BMI)
									</text>
								</svg>
								<div className="card-body">
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												View
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Edit
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<svg
									className="bd-placeholder-img card-img-top"
									width="100%"
									height={225}
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
									aria-label="Placeholder: Thumbnail">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c" />
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Blood Pressure
									</text>
								</svg>
								<div className="card-body">
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												View
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Edit
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<svg
									className="bd-placeholder-img card-img-top"
									width="100%"
									height={225}
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
									aria-label="Placeholder: Thumbnail">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c" />
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Heart Rate
									</text>
								</svg>
								<div className="card-body">
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												View
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Edit
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<svg
									className="bd-placeholder-img card-img-top"
									width="100%"
									height={225}
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
									aria-label="Placeholder: Thumbnail">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c" />
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Location
									</text>
								</svg>
								<div className="card-body">
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												View
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Edit
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<svg
									className="bd-placeholder-img card-img-top"
									width="100%"
									height={225}
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
									aria-label="Placeholder: Thumbnail">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c" />
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Temperature
									</text>
								</svg>
								<div className="card-body">
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												View
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Edit
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<svg
									className="bd-placeholder-img card-img-top"
									width="100%"
									height={225}
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									role="img"
									aria-label="Placeholder: Thumbnail">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c" />
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Weight
									</text>
								</svg>
								<div className="card-body">
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												View
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Edit
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
