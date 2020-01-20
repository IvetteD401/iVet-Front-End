import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Doguments } from "./views/doguments";
import { Medications } from "./views/medications";
import { CalenderAppointments } from "./views/calenderAppointments";
import { Camera } from "./views/camera";
import { Tracker } from "./views/tracker";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Sidebar } from "./component/sidebar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						{/* <Route path="/demo" component={Demo} /> */}
						<Route path="/doguments" component={Doguments} />
						<Route path="/medications" component={Medications} />
						<Route path="/calenderAppointments" component={CalenderAppointments} />
						<Route path="/camera" component={Camera} />
						<Route path="/tracker" component={Tracker} />
						<Route path="/sidebar" component={Sidebar} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
