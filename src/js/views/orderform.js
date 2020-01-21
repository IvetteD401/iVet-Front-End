import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Orderform = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="emptyDiv" />
			<div className="container">
				Order Form
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
