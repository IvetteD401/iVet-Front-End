import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Sidebar = props => {
	return (
		<div style={{ paddingTop: "100px" }}>
			<div id="mySidenav" className={props.action}>
				<a href="javascript:void(0)" className="closebtn" onClick={() => triggerSideBar()} />
				<Link to="/signup/">sign up</Link>
				<Link to="/signup/">Pet Profile</Link>
				<Link to="/settings/">Settings</Link>
				<Link to="/contactUs/">contact us</Link>
				<Link to="/orderform/">order merchandise</Link>
				<Link to="/bookservices/">book services</Link>
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	action: PropTypes.string
};
