import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Settings = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="emptyDiv" />
			<div className="container">
				Setiings
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
