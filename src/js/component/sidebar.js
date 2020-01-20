import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}

	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}
	return (
		<div>
			<div id="mySidenav" className="sidenav">
				<a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>
					×
				</a>
				<a href="#">About</a>
				<a href="#">Services</a>
				<a href="#">Clients</a>
				<a href="#">Contact</a>
			</div>
			<span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>
				☰{" "}
			</span>
		</div>
	);
};
