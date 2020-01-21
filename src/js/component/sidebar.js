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
				<Link to="/signup/">Settings</Link>
				<Link to="/signup/">contact us</Link>
				<Link to="/signup/">order merchandise</Link>
				<Link to="/signup/">book services</Link>
			</div>
			{/* <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => triggerSideBar()}> */}
			{/* ☰{" "} */}
			{/* </span> */}
		</div>
	);
};

Sidebar.propTypes = {
	action: PropTypes.string
};
