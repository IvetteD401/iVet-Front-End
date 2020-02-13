import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer";

export const AddCaregiver = () => {
	const { actions } = useContext(Context);

	const [caregiver, setCaregiver] = useState("");
	const [email, setEmail] = useState("");
	return (
		<>
			<div className="container signup">
				<div className="about Padding-for-Div">
					{/* <form action="/action_page.php" style={{ border: "1px solid #ccc" }}> */}
					<h1 className="text-center mt-5">Connect with your caregiver:</h1>
					{/* <div className="Padding-for-Div"> */}
					<form>
						<div className="form-group">
							{/* <label>caregiver{"'"}s Name</label> */}
							<input
								type="text"
								className="form-control"
								placeholder="Caregivers Name"
								onChange={e => setCaregiver(e.target.value)}
							/>
						</div>
						<div className="form-group">
							{/* <label>Caregiver{"'"}s Email</label> */}
							<input
								type="text"
								className="form-control"
								placeholder="caregiver@email.com"
								onChange={e => setEmail(e.target.value)}
							/>
							<p>***Caregiver must accept invitation to view your pet info.</p>
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
							<button type="button" className="btn btn-secondary btn-sm">
								go home
							</button>
						</Link>
					</form>
				</div>
				<br />
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
							<strong>
								<h6>
									An email has been sent to you caregiver to join iVet and share important
									dogumentation!
								</h6>
							</strong>
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
