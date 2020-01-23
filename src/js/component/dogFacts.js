import React, { useState } from "react";
import ReactDOM from "react-dom";

export const DogFacts = () => {
	const something = ["dogs eat stuff", "dogs run faster than light"];
	return (
		<div>
			<p>{something[0]}</p>
			{/* <button onClick={() => setCount(anecdotes[Math.floor(Math.random() * anecdotes.length)])}>Click me</button> */}
		</div>
	);
};
