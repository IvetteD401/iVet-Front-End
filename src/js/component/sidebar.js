import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	const [sideNav, setSideNav] = useState("close");
	const triggerSideBar = () => {
		if (sideNav == "open sidenav") {
			setSideNav("close");
		} else setSideNav("open sidenav");
	};

	return (
		<div style={{ paddingTop: "100px" }}>
			<div id="mySidenav" className={sideNav}>
				<a href="javascript:void(0)" className="closebtn" onClick={() => triggerSideBar()} />
				<Link to="/signup/">sign up</Link>
				<Link to="/signup/">Pet Profile</Link>
				<Link to="/signup/">Settings</Link>
				<Link to="/signup/">contact us</Link>
				<Link to="/signup/">order merchandise</Link>
				<Link to="/signup/">book services</Link>
			</div>
		<span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => triggerSideBar()}>
				☰{" "}
			</span>
            </div>
	);
};
