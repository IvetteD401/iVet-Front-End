import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const messageUs = props => {
	return (
		<div style={{ paddingTop: "100px" }}>
			<div id="mySidenav" className={props.action}>
				<a href="javascript:void(0)" className="closebtn" onClick={() => triggerSideBar()} />
				<Link to="/signup/">sign up</Link>
			</div>
		</div>
	);
};

messageUs.propTypes = {
	action: PropTypes.string
};
