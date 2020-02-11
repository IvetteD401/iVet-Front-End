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
			<br />
			<br />
			<div className="aboutMed mx-auto">
				<div className="overflow-auto medications">
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Medication</th>
								<th scope="col">Frequency</th>
								<th scope="col">Take with food</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Ketamine</td>
								<td>Once a day</td>
								<td>Yes</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Xanax</td>
								<td>When needed</td>
								<td>No</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Morphine</td>
								<td>When needed</td>
								<td>Yes</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Morphine</td>
								<td>When needed</td>
								<td>Yes</td>
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
