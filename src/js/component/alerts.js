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
			<strong>Holy guacamole!</strong> You should check in on some of those fields below.
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">×</span>
			</button>
		</div>
	);
};

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
// 			<a className="navbar-brand" href="#">
// 				<Link to="/sidebar">
// 					<button className="btn btn-dark">☰</button>
// 				</Link>
// 				iVet
// 			</a>
// 			<button
// 				className="navbar-toggler"
// 				type="button"
// 				data-toggle="collapse"
// 				data-target="#navbarCollapse"
// 				aria-controls="navbarCollapse"
// 				aria-expanded="false"
// 				aria-label="Toggle navigation">
// 				<span className="navbar-toggler-icon" />
// 			</button>
// 			<div className="collapse navbar-collapse" id="navbarCollapse">
// 				<ul className="navbar-nav mr-auto">
// 					<li className="nav-item active">
// 						<a className="nav-link" href="#">
// 							Home <span className="sr-only">(current)</span>
// 						</a>
// 					</li>
// 					<li className="nav-item">
// 						<a className="nav-link" href="#">
// 							Link
// 						</a>
// 					</li>
// 					<li className="nav-item">
// 						<a className="nav-link disabled" href="#">
// 							Disabled
// 						</a>
// 					</li>
// 				</ul>
// 				<form className="form-inline mt-2 mt-md-0">
// 					<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
// 					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
// 						Search
// 					</button>
// 				</form>
// 			</div>
// 		</nav>

// 		// <Link to="/">
// 		// 	<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 		// </Link>
// 	);
// };
