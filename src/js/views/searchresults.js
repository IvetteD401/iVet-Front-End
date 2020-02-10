import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const SearchResults = () => {
	const { store, actions } = useContext(Context);

	<div className="container">
		<ul className="list-group">
			{store.SearchResults.map((item, index) => {
				return (
					<li
						key={index}
						className="list-group-item d-flex justify-content-between"
						style={{ background: item.background }}>
						<Link to={"/single/" + index}>
							<span>Link to: {item.SearchResults}</span>
						</Link>
						<p style={{ color: item.initial }}>Check store/flux.js scroll to the actions to see the code</p>

						<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
							Change Color
						</button>
					</li>
				);
			})}
		</ul>
		<br />
		<Link to="/">
			<button className="btn btn-primary">Back home</button>
		</Link>
	</div>;
};