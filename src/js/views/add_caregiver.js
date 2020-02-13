import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddCaregiver = () => {
	const { actions } = useContext(Context);

	const [caregiver, setCaregiver] = useState("");
	const [email, setEmail] = useState("");
	return (
		<>
			<div className="container signup">
				<div className="about">
					<form action="/action_page.php" style={{ border: "1px solid #ccc" }}>
						<h1 className="text-center mt-5">Connect with your caregiver:</h1>
						<div className="Padding-for-Div">
							<form>
								<div className="form-group">
									<label>caregiver{"'"}s Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="Caregivers Name"
										onChange={e => setCaregiver(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label>Caregiver{"'"}s Email</label>
									<input
										type="text"
										className="form-control"
										placeholder="email"
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<button
									type="button"
									className="btn btn-lg btn-dark btn-block"
									data-toggle="modal"
									data-target="#exampleModal">
									Send Invite!
								</button>
								<Link to="/petProfile/">
									{" "}
									<button type="button" className="btn btn-primary">
										go home
									</button>
								</Link>
							</form>
						</div>
						<br />

						<br />
					</form>
				</div>
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
		</>
	);
};
