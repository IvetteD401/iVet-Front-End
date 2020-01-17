import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer">
		<span>
			{" "}
			<i className="fas fa-paw" />
		</span>
		<nav className="footer footer-expand-md footer-dark fixed-top bg-dark">
			<a className="footer-brand" href="#">
				Fixed footer
			</a>
			<button
				className="footer-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#footerCollapse"
				aria-controls="footerCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="footer-toggler-icon" />
			</button>
			<div className="collapse footer-collapse" id="footerCollapse">
				<ul className="footer-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Disabled
						</a>
					</li>
				</ul>
				<form className="form-inline mt-2 mt-md-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
					<div className="ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
				</form>
			</div>
		</nav>
	</footer>
);
