import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const BreedSearch = () => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState();
	return (
		<>
			<div className="input-group mb-3">
				<input
					onChange={e => setInput(e.target.value)}
					type="text"
					className="form-control"
					placeholder="Select Your Doggy's Breed"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<div className="input-group-append">
					<button
						onClick={() => actions.searchBreed(input)}
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2">
						Search
					</button>
				</div>
			</div>
		</>
	);
};
