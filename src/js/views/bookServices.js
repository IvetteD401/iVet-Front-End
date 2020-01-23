import React, { useState, useEffect, useContext, ReactNode, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const BookServices = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{<div className="emptyDiv" />}
			<div className="container general mx-auto">
				<div className="container">
					<h1> Book Services</h1>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1">
							Grooming Services
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1">
							Dog Walker
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" disabled />
						<label className="form-check-label" htmlFor="defaultCheck2">
							Find a Vet!
						</label>
					</div>
				</div>
				<br />
				<Link to="/calenderAppointments">
					<button className="btn btn-primary">go to calendar</button>
				</Link>
				<Link to="/">
					<button className="btn btn-primary">order merch</button>
				</Link>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
