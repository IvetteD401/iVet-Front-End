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
										Canine BMI (Weight-to-Height Ratio)
									</text>
								</svg>
								<div className="card-body">
									<p className="card-text">
										<div>
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<button
														className="btn btn-outline-secondary dropdown-toggle"
														type="button"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false">
														Weight
													</button>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">
															Pounds
														</a>
														<a className="dropdown-item" href="#">
															Kilograms
														</a>
														<a className="dropdown-item" href="#">
															Stones
														</a>
														<div role="separator" className="dropdown-divider" />
														<a className="dropdown-item" href="#">
															Separated link
														</a>
													</div>
												</div>
												<input
													type="text"
													className="form-control"
													aria-label="Text input with dropdown button"
												/>
											</div>
											<div className="input-group">
												<input
													type="text"
													className="form-control"
													aria-label="Text input with dropdown button"
												/>
												<div className="input-group-append">
													<button
														className="btn btn-outline-secondary dropdown-toggle"
														type="button"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false">
														Height
													</button>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">
															Inches
														</a>
														<a className="dropdown-item" href="#">
															Centimeters
														</a>
														<a className="dropdown-item" href="#">
															Something else here
														</a>
														<div role="separator" className="dropdown-divider" />
														<a className="dropdown-item" href="#">
															Separated link
														</a>
													</div>
												</div>
											</div>
										</div>
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Calculate
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
