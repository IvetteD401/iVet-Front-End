import React from "react";
// import {
// 	Collapse,
// 	Navbar,
// 	NavbarToggler,
// 	NavbarBrand,
// 	Nav,
// 	NavItem,
// 	NavLink,
// 	UncontrolledDropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem,
// 	NavbarText
// } from "reactstrap";

export const Alerts = () => {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="alert alert-warning alert-dismissible fade show" role="alert">
			<strong>It{"’"}s mind-beagle-ing.</strong> all vaccinations are up to date!
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">×</span>
			</button>
		</div>
	);
};
