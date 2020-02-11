import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const DogumentsFile = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<section className="emptyDiv"></section>
			<br />
			<br />
			<div className="aboutMed mx-auto">
				<div className="form-signup">
					<h3>Select your doggyment files to upload</h3>
					<form action="/action_page.php">
						Select files: <input type="file" name="myFile" multiple />
						<br />
						{/* <br /> */}
						<input type="submit" />
					</form>
				</div>
			</div>
			<br />
			<div className="aboutLink mx-auto">
				<Link to="/petprofile/">
					<span>
						<h4>Go back to my profile.</h4>
					</span>
				</Link>
				<Link to="/doguments_images/">
					<span>
						<h4>View my image gallery.</h4>
					</span>
				</Link>
			</div>
		</>
	);
};
