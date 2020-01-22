import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const messageUs = props => {
	return (
		<div style={{ paddingTop: "100px" }}>
			<div>just need some css and html that look like a chat</div>
		</div>
	);
};

messageUs.propTypes = {
	action: PropTypes.string
};
