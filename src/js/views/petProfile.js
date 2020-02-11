import React, { useState, useEffect, useContext } from "react";
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const petProfile = () => {
	const { store, actions } = useContext(Context);
	console.log("yassss", store.pet_profile);
	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center greeting">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">
						<strong>Hello, Ivette!</strong>
					</h1>
				</div>
			</div>
			{store.pet_profile &&
				store.pet_profile.map((e, index) => {
					return (
						<div key={index}>
							<li className="list-group-item">
								<section className="jumbotron homeJumbo text-center mx-auto">
									<div className="card about" style={{ maxWidth: "100%" }}>
										<div className="row no-gutters">
											<div className="col-md-4">
												<img
													src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
													className="card-img profile"
													alt="..."
												/>
											</div>
											<div className="col-md-8">
												<div className="card-body profile">
													<div className=" float-right">
														{/* <Link to={"/edit/" + e.id + "/" + index}>
											<button className="btn">
												<i className="fas fa-pencil-alt mr-3" />
											</button>
										</Link> */}
														<button
															className="btn"
															onClick={() => {
																actions.deletePet_Profile(e.id);
															}}>
															<i className="fas fa-trash-alt" />
														</button>
													</div>
													<h2 className="card-title">
														<strong>{e.petname}</strong>
													</h2>
													<h4>
														<p className="card-text">
															<strong>
																<ol className="card-text align-left">
																	<ul>Breed: Shitzhu</ul>
																	<ul>Weight: 14.6lbs</ul>
																	<ul>Primary Vet: {e.vetname}</ul>
																	<ul>Groomer: {e.groomername}</ul>
																	<ul>Caregiver: Elinne, Rose</ul>
																	<ul>Oreo is up to date with vet appoinments</ul>
																	<ul>
																		Enjoys playing, eating, cuddles, long walks.
																	</ul>
																</ol>
															</strong>
														</p>
													</h4>
												</div>
											</div>
										</div>
									</div>
								</section>
							</li>
						</div>
					);
				})}
			<div className="row dogumentIcons mx-auto">
				<div className="col-6 dogIcons">
					<Link to="/doguments_file">
						<i className="fas fa-archive"></i>
					</Link>
				</div>
				<div className="col-6 dogIcons">
					<Link to="/doguments_images">
						<i className="far fa-images"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};
