import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { ivetHome } from "./views/ivethome";
import { Landing } from "./views/landing";
import { Demo } from "./views/demo";
import { Doguments } from "./views/doguments";
import { DogumentsFile } from "./views/doguments_file";
import { DogumentsFileDetails } from "./views/doguments_fileDetails";
import { DogumentsImages } from "./views/doguments_images";
import { Medications } from "./views/medications";
import { CalenderAppointments } from "./views/calenderAppointments";
import { Camera } from "./views/camera";
import { Tracker } from "./views/tracker";
import { SendMessage } from "./views/sendMessage";
import { Orderform } from "./views/orderform";
import { BookServices } from "./views/bookServices";
import { ContactUs } from "./views/ContactUs";
// import { MyForm } from "./views/contactUs";
import { Settings } from "./views/settings";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import { petProfile } from "./views/petProfile";
import { AddPet } from "./views/add_petProfile";
import { AddCaregiver } from "./views/add_caregiver";
import { BreedSearch } from "./views/BreedSearch";
import { SearchResults } from "./views/searchResults";

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
						<Route exact path="/sendMessage" component={SendMessage} />
						<Route exact path="/modalfunction" component={modalFunction} />
						<Route exact path="/BreedSearch" component={BreedSearch} />
						{/* <Route path="/demo" component={Demo} /> */}
						<Route path="/doguments" component={Doguments} />
						<Route path="/doguments_images" component={DogumentsImages} />
						<Route path="/doguments_file" component={DogumentsFile} />
						<Route path="/doguments_fileDetails" component={DogumentsFileDetails} />
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
						<Route path="/add_petProfile" component={AddPet} />
						<Route path="/add_caregiver" component={AddCaregiver} />
						<Route path="/searchResults" component={SearchResults} />

						<Route path="/tracker" component={Tracker} />
						<Route path="/sidebar" component={Sidebar} />
						{/* <Route path="/single/:theid" component={Single} /> */}
						<Footer />
						<Route render={() => <h1>Love your Doggy!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
