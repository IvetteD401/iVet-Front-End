import React, { useState, useEffect, useContext } from "react";
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SearchResults } from "../views/searchResults";
import Oreo from "../../img/oreo.jpg";
import { Footer } from "../component/footer";

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
			<div className="align-center">
				<div className=" float-right">
					<Link to="/add_caregiver">
						<h3>Invite your caregiver!</h3>
					</Link>
				</div>
				<div className=" float-left">
					<Link to="/add_petProfile">
						<h3>Add a new pet</h3>
					</Link>
				</div>
			</div>
			<br />
			<br />

			{store.pet_profile &&
				store.pet_profile.map((e, index) => {
					return (
						<div key={index}>
							<li className="list-group-item">
								<section className="jumbotron homeJumbo text-center mx-auto">
									<div className="card about mx-auto" style={{ maxWidth: "100%" }}>
										<div className="row no-gutters">
											<div className="col-md-4">
												<img src={Oreo} className="card-img profile" alt="..." />
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
													<div className="PetCard">
														<h2 className="card-title">
															<strong>{e.petname}</strong>
														</h2>
														<h4>
															<p className="card-text">
																<strong>
																	<ol className="card-text align-left">
																		<ul>Breed: Shitzhu</ul>
																		<ul>VetsName: Dr Hulk{e.vetname}</ul>
																		<ul>
																			Groomername: Puppy Palace{e.groomername}
																		</ul>
																		<ul>Caregiver: Puppy Palace{e.caregiver}</ul>
																		<ul>Puppy Habbits:{e.likes}</ul>
																	</ol>
																	{""}
																	<p>
																		{e.petname} is up to date with vet appoinments
																	</p>
																</strong>
															</p>
														</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</li>
						</div>
					);
				})}
			<Footer />
		</div>
	);
};
