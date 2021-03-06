import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Tracker = () => {
	const { store, actions } = useContext(Context);
	const [calculate, setCalculate] = useState(0);
	const [weight, setWeight] = useState(400);
	const [height, setHeight] = useState(200);

	return (
		<>
			<section className="emptyDiv"></section>
			{/* <div className="album about py-5 bg-light"> */}
			{/* <div className="container"> */}
			<div className="row about">
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
						<p>Weight-to-Height Ratio: {calculate}</p>
						{/* <h1 onClick={() => setCalculate(weight / height)}>click to update</h1> */}
						<div className="card-body">
							<p className="card-text">
								<div>
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											aria-label="Text input with dropdown button"
											onChange={e => setWeight(e.target.value)}
											value={weight}
										/>
										<div className="input-group-append">
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
												{/* <div role="separator" className="dropdown-divider" />
														<a className="dropdown-item" href="#">
															Separated link
														</a> */}
											</div>
										</div>
									</div>
									<div className="input-group mt-2">
										<input
											type="text"
											className="form-control"
											aria-label="Text input with dropdown button"
											onChange={e => setHeight(e.target.value)}
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
												{/* <div role="separator" className="dropdown-divider" />
														<a className="dropdown-item" href="#">
															Separated link
														</a> */}
											</div>
										</div>
									</div>
								</div>
							</p>
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
									<button
										type="button"
										className="btn btn-sm btn-outline-secondary"
										onClick={() => setCalculate(weight / height)}>
										Calculate
									</button>
									{/* <button type="button" className="btn btn-sm btn-outline-secondary">
												Edit
											</button> */}
								</div>
								{/* <small className="text-muted">9 mins</small> */}
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
								Heart Rate{" "}
							</text>
						</svg>
						<div className="card-body">
							<p className="card-text">The blood pressure measurements will be displayed here.</p>
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
				{/* <div className="col-md-4">
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
						</div> */}
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
							<p className="card-text">The location of your pet will be displayed here!</p>
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
				{/* <div className="col-md-4">
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
						</div> */}
				{/* <div className="col-md-4">
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
						</div> */}
			</div>
			{/* </div> */}
			{/* </div> */}
		</>
	);
};
