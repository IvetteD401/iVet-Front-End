import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Sidebar = props => {
	return (
		<div style={{ paddingTop: "100px" }}>
			<div id="mySidenav" className={props.action}>
				{/* <br /> */}
				<br />
				<a href="javascript:void(0)" className="closebtn" onClick={() => triggerSideBar()} />
				<Link to="/petProfile/">Pet Profile</Link>
				<div className="card mb-4 shadow-sm">
					<svg
						className="bd-placeholder-img card-img-top"
						width="90%"
						height={225}
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
						role="img"
						aria-label="Placeholder: Thumbnail">
						<title>Your Dogs Name and Info</title>
						<rect width="100%" height="100%" fill="#55595c" />
						<text x="50%" y="50%" fill="#eceeef" dy=".3em">
							<img src="https://i.pinimg.com/originals/39/33/24/393324d46b50e0d0f97cae58d824799a.png"></img>
						</text>
					</svg>
				</div>

				<Link to="/orderform/">order merchandise</Link>
				<Link to="/bookservices/">book services</Link>
				<Link to="/contactUs/">contact us</Link>
				<Link to="/settings/">Settings</Link>
				<Link to="/BreedSearch/">BreedSearch</Link>
				<Link to="/SearchResults/">SearchResults</Link>
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	action: PropTypes.string
};
