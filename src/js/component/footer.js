import React from "react";
import { Link } from "react-router-dom";
// import { Doguments } from "/doguments";
// import { Doguments } from "./views/doguments";
import { Context } from "../store/appContext";

export const Footer = () => {
	return (
		<div className="footer dogIcons">
			<div className="container">
				<div className="row">
					<div className="col-sm ml-auto">
						<Link to="/petprofile/">
							<span>
								<h1>
									<i className="fas fa-paw"></i>
								</h1>
							</span>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/tracker">
							<span>
								<h1>
									<i className="far fa-chart-bar"></i>
								</h1>
							</span>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/doguments_file">
							<span>
								<h1>
									<i className="fas fa-camera"></i>
								</h1>
							</span>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/medications">
							<span>
								<h1>
									<i className="fas fa-prescription"></i>
								</h1>
							</span>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/ChatMessage">
							<span>
								<h1>
									<i className="far fa-envelope"></i>
								</h1>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
