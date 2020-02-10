import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { ivetHome } from "./views/ivethome";
import { Landing } from "./views/landing";
import { Demo } from "./views/demo";
import { Doguments } from "./views/doguments";
import { DogumentsFile } from "./views/doguments_file";
import { DogumentsImages } from "./views/doguments_images";
import { Medications } from "./views/medications";
import { CalenderAppointments } from "./views/calenderAppointments";
import { Camera } from "./views/camera";
import { Tracker } from "./views/tracker";
import { Orderform } from "./views/orderform";
import { BookServices } from "./views/bookServices";
import { ContactUs } from "./views/ContactUs";
// import { MyForm } from "./views/contactUs";
import { Settings } from "./views/settings";
import { SearchResults } from "./views/searchresults";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import { petProfile } from "./views/petProfile";
import { BreedSearch } from "./views/BreedSearch";

import injectContext from "./store/appContext";

import { Navbars } from "./component/navbar";
import { WebCam } from "./component/webCam";
import { Sidebar } from "./component/sidebar";
import { Footer } from "./component/footer";
import { Alerts } from "./component/alerts";
import { ChatMessage } from "./component/ChatMessage";
import { modalFunction } from "./component/modalfunction";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbars />
					{/* <Alerts /> */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/landing" component={Landing} />
						<Route exact path="/ivethome" component={ivetHome} />
						<Route exact path="/alerts" component={Alerts} />
						<Route exact path="/ChatMessage" component={ChatMessage} />
						<Route exact path="/modalfunction" component={modalFunction} />
						<Route exact path="/BreedSearch" component={BreedSearch} />
						{/* <Route path="/demo" component={Demo} /> */}
						<Route path="/doguments" component={Doguments} />
						<Route path="/doguments_images" component={DogumentsImages} />
						<Route path="/doguments_file" component={DogumentsFile} />
						<Route path="/medications" component={Medications} />
						<Route path="/calenderAppointments" component={CalenderAppointments} />
						<Route path="/camera" component={Camera} />
						<Route path="/orderform" component={Orderform} />
						<Route path="/bookServices" component={BookServices} />
						<Route path="/settings" component={Settings} />
						<Route path="/contactUs" component={ContactUs} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route path="/petProfile" component={petProfile} />
						<Route path="/search" component={SearchResults} />

						<Route path="/tracker" component={Tracker} />
						<Route path="/sidebar" component={Sidebar} />
						{/* <Route path="/single/:theid" component={Single} /> */}
						<Route render={() => <h1>Love your Doggy!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
