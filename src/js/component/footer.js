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
					<div className="col-sm ml-auto">
						<Link to="/doguments/">
							<button className="btn btn-dark">
								{/* <i className="fas fa-book-medical" /> */}
								Doguments
							</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/tracker">
							<button className="btn btn-dark">Tracker</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/camera">
							<button className="btn btn-dark">Camera</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/medications">
							<button className="btn btn-dark">Vaccinations {"&"} Medications</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/calenderAppointments">
							<button className="btn btn-dark">Appointments</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
