import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddCaregiver = () => {
	const { actions } = useContext(Context);

	const [caregiver, setCaregiver] = useState("");
	const [email, setEmail] = useState("");
	return (
		<div className="container signup">
			<div className="about">
				<form action="/action_page.php" style={{ border: "1px solid #ccc" }}>
					<h1 className="text-center mt-5">Add a new pet</h1>
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
								Book!
							</button>
							<Link className="mt-3 w-100 text-center" to="/">
								or get back to contacts
							</Link>
						</form>
					</div>
					<br />
					<br />
				</form>
			</div>
		</div>
	);
};
