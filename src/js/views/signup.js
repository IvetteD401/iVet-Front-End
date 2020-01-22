import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container general">
				<form action="/action_page.php" style={{ border: "1px solid #ccc" }}>
					<div className="container">
						<h1>Sign Up</h1>
						<p>Please fill in this form to create an account.</p>
						<hr />
						<label htmlFor="email">
							<b>Email</b>
						</label>
						<input type="text" placeholder="Enter Email" name="email" required />
						<br />
						<label htmlFor="psw">
							<b>Password</b>
						</label>
						<input type="password" placeholder="Enter Password" name="psw" required />
						<br />
						<label htmlFor="psw-repeat">
							<b>Repeat Password</b>
						</label>
						<input type="password" placeholder="Repeat Password" name="psw-repeat" required />
						<br />
						<label>
							<input
								type="checkbox"
								defaultChecked="checked"
								name="remember"
								style={{ marginBottom: "15px" }}
							/>{" "}
							Remember me
						</label>
						<p>
							By creating an account you agree to our{" "}
							<a href="#" style={{ color: "dodgerblue" }}>
								Terms &amp; Privacy
							</a>
							.
						</p>
						<br />
						<div className="clearfix">
							<button type="button" className="cancelbtn">
								Cancel
							</button>
							<button type="submit" className="signupbtn">
								Sign Up
							</button>
						</div>
						<Link to="/login">Already a member yet? Log in here!</Link>
					</div>
				</form>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
