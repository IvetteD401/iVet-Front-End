import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="footer backgroundColor-black">
			<div className="container">
				<div className="row">
					<div className="col-sm ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
					<div className="col-sm ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
