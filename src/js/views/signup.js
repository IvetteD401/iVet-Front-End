import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

{
	/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */
}
export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container signup">
				<form action="/action_page.php" style={{ border: "1px solid #ccc" }}>
					<div className="container form about">
						<h1 className="h3 mb-3 font-weight-normal">Let{"'"}s get started!</h1>

						<label htmlFor="inputEmail" className="sr-only">
							Email address
						</label>
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
						/>

						<label htmlFor="inputPassword" className="sr-only">
							Password
						</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
						/>
						<label htmlFor="inputPassword" className="sr-only">
							Re-enter Password
						</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Re-enter Password"
							required
						/>

						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" defaultValue="remember-me" /> Remember me
							</label>
							<p>
								By creating an account you agree to our{" "}
								<strong>
									<a href="#" style={{ color: "dodgerblue" }}>
										Terms &amp; Privacy
									</a>
								</strong>
								.
							</p>
						</div>
						<div className="row">
							<div className="col">
								<div className="clearfix">
									<button className="btn btn-secondary btn-lg btn-block" type="submit">
										Cancel
									</button>
								</div>
							</div>
							<div className="col">
								<Link to="/petProfile/">
									<button className="btn btn-lg btn-dark btn-block" type="submit">
										Sign up
									</button>
								</Link>
							</div>
						</div>
						<Link to="/login">
							<strong>Already a member? Log in here!</strong>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};
