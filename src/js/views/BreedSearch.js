import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const DogDetails = props => {
	const { dog } = props;
	/* return how you'd like to render the dog's details here */
	return JSON.stringify(dog, null, 2); // for now, just dump it as JSON
};

const BreedItems = () => {
	const [activeIdx, setActiveIdx] = useState(0);
	const { store } = useContext(Context);

	return (
		<>
			{store.breedsSearch.map((dog, idx) => {
				const isActive = activeIdx == idx;
				return (
					<li
						key={idx}
						className={isActive ? "list-group-item active" : "list-group-item"}
						onClick={() => setActiveIdx(idx)}>
						{isActive ? <DogDetails dog={dog} /> : dog.name}
					</li>
				);
			})}
		</>
	);
};

export const BreedSearch = () => {
	return (
		<>
			<h1>Breed Search</h1>

			<ul className="list-group">
				<BreedItems />
			</ul>
		</>
	);
};
