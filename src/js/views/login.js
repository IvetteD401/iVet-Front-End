import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<section className="jumbotron">
				<div className="container general mx-auto">
					<form className="form-signin">
						<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

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

						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" defaultValue="remember-me" /> Remember me
							</label>
						</div>
						<Link to="/landing/">
							<button className="btn btn-lg btn-dark btn-block" type="submit">
								Sign in
							</button>
						</Link>
						<Link to="/signup">
							<strong>Not a member yet? Sign up here!</strong>
						</Link>
					</form>
				</div>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</section>
			<p className="mt-5 mb-3 text-muted">© iVet 2020</p>
		</>
	);
};
