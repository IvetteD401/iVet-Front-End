import React from "react";
import { Link } from "react-router-dom";
// import { Doguments } from "/doguments";
// import { Doguments } from "./views/doguments";
import { Context } from "../store/appContext";

export const Footer = () => {
	return (
		<div className="footer backgroundColor-black">
			<div className="container">
				<div className="row">
					<div className="col-lg ml-auto">
						<Link to="/doguments/">
							<span>
								<i className="far fa-folder-open"></i>
							</span>
						</Link>
					</div>
					<div className="col-lg ml-auto">
						<Link to="/tracker">
							<span>
								<i className="far fa-chart-bar"></i>
							</span>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/camera">
							<span>
								<i className="fas fa-camera"></i>
							</span>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/medications">
							<span>
								<i className="fas fa-prescription"></i>
							</span>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/calenderAppointments">
							<span>
								<i className="far fa-calendar-alt"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
