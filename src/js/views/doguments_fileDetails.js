import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const DogumentsFileDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<section className="emptyDiv"></section>
			<br />
			<br />
			<div className="aboutMed mx-auto">
				<div className="form-signup">
					<h3>Select your doggyment files to upload</h3>
					<div className="dogFiles">
						<img src="https://careanimalshelterbacolod.files.wordpress.com/2017/10/adoption-formjpg1.jpg?w=660"></img>
					</div>
				</div>
			</div>
			<div>
				<Link to="/petprofile/">
					<span>
						<h4>View my doguments!</h4>
					</span>
				</Link>
			</div>
			{/* modal */}

			<div
				className="modal fade"
				id="exampleModal"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content general">
						<div className="modal-header">
							<h2 className="modal-title" id="exampleModalLabel">
								Congratulations!!{" "}
							</h2>{" "}
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<h4>Your dogument has been added!</h4>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="aboutLink mx-auto">
				<Link to="/petprofile/">
					<span>
						<h4>Go back to my profile.</h4>
					</span>
				</Link>
				<Link to="/doguments_images/">
					<span>
						<h4>View my image gallery.</h4>
					</span>
				</Link>
			</div> */}
		</>
	);
};
