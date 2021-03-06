import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { DogFacts } from "../component/dogFacts";
import { BreedSearch } from "../component/breedSearch";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from "reactstrap";
import { Context } from "../store/appContext";

export const Navbars = props => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const [messageUs, setMessageUs] = useState("close");
	const [sideNav, setSideNav] = useState("close");
	const [input, setInput] = useState();
	const triggerSideBar = () => {
		if (sideNav == "open sidenav") {
			setSideNav("close");
		} else setSideNav("open sidenav");
	};

	return (
		<>
			<div className="hidden"></div>
			<div className="Navbar">
				<Navbar color="dark" light expand="md">
					{/* <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => triggerSideBar()}>
						☰{"  "}
					</span> */}

					<NavbarBrand href="/">
						<span>
							{"  "}
							<strong> iVet </strong> for Dogs{" "}
						</span>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<DogFacts />

					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{/* <NavItem>
								<NavLink href="/login">Log In </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/signup">Sign Up </NavLink>
							</NavItem>{" "} */}
							<NavItem>
								{/* <div>
									<input type="text" placeholder="Search.." name="search" />
									<button
										type="submit"
										onClick={() => {
											actions.Breedinfo();
										}}>
										<i className="fa fa-search" />
									</button>
								</div> */}
							</NavItem>
							{/* <UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret className="links">
									Doggy Options
								</DropdownToggle>
								<DropdownMenu left>
									<DropdownItem>Find My Vet</DropdownItem>
									<DropdownItem>Connect to Vet</DropdownItem>
									<DropdownItem>Find Doggy Sitter</DropdownItem>
									<DropdownItem>Doggy Nutrition</DropdownItem>
									<DropdownItem>Find doggy Walker</DropdownItem>
									<DropdownItem>Find my new Puppy</DropdownItem>
									<DropdownItem divider />
								</DropdownMenu>
							</UncontrolledDropdown> */}
						</Nav>
						<NavItem>
							<div>
								{/* <input
									onChange={evt => actions.setBreedSearchParam(evt.target.value)}
									type="text"
									placeholder="Look up breed..."
									name="search"
								/> */}
								<BreedSearch />
								{/* <Link to="/BreedSearch">
									<button onClick={actions.searchBreed}>
										<i className="fa fa-search" />
									</button>
								</Link> */}
							</div>
						</NavItem>
						<NavbarText></NavbarText>
					</Collapse>
				</Navbar>
			</div>

			<Sidebar action={sideNav} />
		</>
	);
};

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
// 			<a className="navbar-brand" href="#">
// 				<Link to="/sidebar">
// 					<button className="btn btn-dark"></button>
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

// 		 <Link to="/">
// 		 	<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 		 </Link>
// 	);
//  };
