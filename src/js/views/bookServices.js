import React, { useState, useEffect, useContext, ReactNode, SyntheticEvent } from "react";
import { Link } from "react-router-dom";

// import ApiCalendar from "react-google-calendar-api";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const BookServices = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{<div className="emptyDiv" />}
			<div className="container">
				Book Services
				<div>
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
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
