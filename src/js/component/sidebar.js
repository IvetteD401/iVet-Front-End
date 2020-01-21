import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	const [sideNav, setSideNav] = useState("close");
	const triggerSideBar = () => {
		if (sideNav == "open") {
			setSideNav("close");
		} else setSideNav("open");
	};

	return (
		<div>
			<div id="mySidenav" className={sideNav}>
				<a href="javascript:void(0)" className="closebtn" onClick={() => triggerSideBar()} />
				<a href="#">About</a>
				<a href="#">Services</a>
				<a href="#">Partners</a>
				<a href="#">Contact</a>
                <a href="#">Sign Up</a>
			</div>
			<span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => triggerSideBar()}>
				☰{" "}
			</span>
		</div>
	);
};
