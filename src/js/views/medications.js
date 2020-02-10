import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Alerts } from "../component/alerts";

export const Medications = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<section className="emptyDiv"></section>
			<div className="body3">
				<div className="overflow-auto medications">
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Handle</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="modificationButton mx-auto">
					<button type="button" className="btn btn-secondary">
						Edit
					</button>
					<button type="button" className="btn btn-success">
						Add
					</button>
					<button type="button" className="btn btn-danger">
						Delete
					</button>
				</div>
				<Alerts />
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</>
	);
};
