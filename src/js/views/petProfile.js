import React from "react";
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import { Link } from "react-router";

export const petProfile = () => {
	return (
		<div>
			<section className="jumbotron text-center">
				<h1 className="greeting">
					<strong>Hello, Ivette!</strong>
				</h1>

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
									<title>Your Dogs Name and Info</title>
									<rect width="100%" height="100%" fill="#55595c" />
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										<img src="https://i.pinimg.com/originals/39/33/24/393324d46b50e0d0f97cae58d824799a.png"></img>
									</text>
								</svg>
								<div className="card-body">
									<ol className="card-text">
										<ul>enjoyed a 3 mile walk 2/4/20 @1:30pm</ul>
										<ul>up to date with vet appoinments</ul>
										<ul>Ate twice today. 8am: Half a chicken and 6pm:Half a chicken</ul>
									</ol>
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
			</section>
		</div>
	);
};
