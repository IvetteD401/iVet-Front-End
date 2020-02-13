import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SendMessage = () => {
	const { actions } = useContext(Context);

	const [caregiver, setCaregiver] = useState("");
	const [email, setEmail] = useState("");
	return (
		<>
			<div className="container signup">
				<div className="about Padding-for-Div">
					{/* <form action="/action_page.php" style={{ border: "1px solid #ccc" }}> */}
					<h1 className="text-center mt-5"></h1>
					{/* <div className="Padding-for-Div"> */}
					<form onSubmit={event => handleSubmit(event)}>
						{/* <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}> */}
						<input
							id="name"
							onChange={e => setNameInput(e.target.value.trim())}
							required
							placeholder="What is your name .."
						/>
						<br />
						<input
							id="room"
							onChange={e => setRoom(e.target.value.trim())}
							placeholder="What is your room .."
						/>
						<br />
						<button
							type="button"
							className="btn btn-lg btn-dark btn-block"
							data-toggle="modal"
							data-target="#exampleModal">
							Send Invite!
						</button>
						{/* </div> */}
					</form>
					<br />
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
		</>
	);
};
