import React from "react";
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import { Link } from "react-router";

export const petProfile = () => {
	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center greeting">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">
						<strong>Hello, Ivette!</strong>
					</h1>
				</div>
			</div>

			<section className="jumbotron homeJumbo lead text-center mx-auto">
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
								<h2 className="card-title">
									<strong>Oreo</strong>
								</h2>
								<h4>
									<p className="card-text">
										<strong>
											<ol className="card-text align-left">
												<ul>Breed: Shitzhu</ul>
												<ul>Weight: 14.6lbs</ul>
												<ul>Primary Vet: Sunshine Animal Clinic</ul>
												<ul>Groomer: Home groomed</ul>
												<ul>Caregiver: Elinne, Rose</ul>
												<ul>Oreo is to date with vet appoinments</ul>
												<ul>Enjoys playing, eating, cuddles, long walks.</ul>
											</ol>
										</strong>
									</p>
								</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* </h4>
							<div className="btn-group">
								<button type="button" className="btn btn-sm btn-outline-secondary">
									View
								</button>
								<button type="button" className="btn btn-sm btn-outline-secondary">
									Edit
								</button>
							</div>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
};
