import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Alerts } from "../component/alerts";

export const Medications = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState();
	const [newToDo, setNewToDo] = useState([]);

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
			{/* <section className="emptyDiv"></section> */}
			{/* 
			<br />
			<br /> */}
			<div className="container signup">
				<div className="about Padding-for-Div mx-auto">
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
				</div>

				<Alerts />
			</div>
		</>
	);
};
