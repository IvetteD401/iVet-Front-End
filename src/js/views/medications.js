import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Alerts } from "../component/alerts";

export const Medications = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState();
	const [newToDo, setNewToDo] = useState([]);

	// const [toDo, setToDO] = useState();
	// function toDoChange(e) {
	// 	setToDO(e.target.value);
	// }

	function addToDo(e) {
		if (value === "") return;
		setNewToDo([...newToDo, { text: value }]);
		setValue("");
	}

	function deleteInput(e) {
		newToDo.splice(list1, 1);
		setNewToDo([...newToDo]);
	}
	return (
		<>
			<section className="emptyDiv"></section>
			<br />
			<br />
			<div className="aboutMed mx-auto">
				<h1>Medications</h1>
				<div className="overflow-auto medications">
					<input
						className="inputMed"
						id="input1"
						type="text"
						placeholder="Medication and Frequency"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>

					<button className="addmedbtn" onClick={addToDo}>
						<i className="fas fa-plus-circle"></i>
					</button>
					<br />
					{/* <table className="table table-striped"> */}
					<ul>
						{newToDo.map(todo => (
							<>
								<li className="inputMed" id="list1" key={todo.index}>
									{todo.text}
									<button className="addmedbtn float-right" onClick={deleteInput}>
										<i className="fas fa-trash-alt" />
									</button>
								</li>
							</>
						))}
					</ul>
				</div>
				{/* <div className="overflow-auto medications">
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
				</div> */}
				<Alerts />
			</div>
		</>
	);
};
