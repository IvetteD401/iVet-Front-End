import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const CalenderAppointments = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="emptyDiv" />
			<div className="container">
				<h1> CalenderAppointments </h1>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
