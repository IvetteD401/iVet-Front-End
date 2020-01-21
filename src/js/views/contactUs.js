import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ContactUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="emptyDiv" />
			<div className="container">
				Contact us
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
