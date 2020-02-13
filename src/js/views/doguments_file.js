import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const DogumentsFile = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<section className="emptyDiv"></section>

			<div className="container signup">
				<div className="about Padding-for-Div">
					{/* <form action="/action_page.php" style={{ border: "1px solid #ccc" }}> */}
					<br />
					<h3>Select the dogument files to upload:</h3>
					<br />
					{/* <div className="Padding-for-Div"> */}
					{/* <div className="aboutMed mx-auto"> */}
					<form action="/action_page.php">
						Select files: <input type="file" name="myFile" multiple />
						<br />
						<br />
						<button
							type="button"
							className="btn btn-lg btn-dark btn-block"
							data-toggle="modal"
							data-target="#exampleModal">
							Add my dogument!
						</button>
					</form>
					<br />
					{/* </div> */}
					<div>
						<Link to="/doguments_fileDetails/">
							<span>
								<h4>View my doguments!</h4>
							</span>
						</Link>
					</div>
					{/* </div> */}
					{/* </form> */}

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
				</div>
			</div>
		</>
	);
};
