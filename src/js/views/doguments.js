import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Doguments = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<section className="emptyDiv"></section>
			<div className="row mx-auto">
				<div className="col-6 dogIcons">
					<Link to="/doguments_file">
						<i className="fas fa-archive"></i>
					</Link>
				</div>
				<div className="col-6 dogIcons">
					<Link to="/doguments_images">
						<i className="far fa-images"></i>
					</Link>
				</div>
			</div>
		</>
	);
};
