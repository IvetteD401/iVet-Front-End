import React, { useState, useEffect, useContext, ReactNode, SyntheticEvent } from "react";
import { Link } from "react-router-dom";

// import ApiCalendar from "react-google-calendar-api";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const BookServices = () => {
	// const { store, actions } = useContext(Context);

	//  fetch('https://www.googleapis.com/calendar/v3')
	// .then(function(response) {
	//     if (!response.ok) {
	//     throw Error(response.statusText);
	// 	}
	// 	// Here is where you put what you want to do with the response.
	// })
	// .catch(function(error) {
	// 	console.log('Looks like there was a problem: \n', error);
	// });
	//  export default class DoubleButton extends React.Component {
	//   constructor(props) {
	//     super(props);
	//     this.handleItemClick = this.handleItemClick.bind(this);
	//   }

	//    = handleItemClick(function SyntheticEvent<any>, name: string): void {
	//     if (name === 'sign-in') {
	//       ApiCalendar.handleAuthClick();
	//     } else (name === 'sign-out') {
	//       ApiCalendar.handleSignoutClick();
	//     }
	//   }

	//       render(): ReactNode {
	//         return (
	//               <button
	//                   onClick={(e) => this.handleItemClick(e, 'sign-in')}
	//               >
	//                  sign-in
	//                </button>
	//               <button
	//                   onClick={(e) => this.handleItemClick(e, 'sign-out')}
	//               >
	//                  sign-out
	//              </button>
	//          );
	//     }
	//  }
	return (
		<>
			{<div className="emptyDiv" />}
			<div className="container general mx-auto">
				<div className="container">
					<h1> Book Services</h1>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1">
							Grooming Services
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1">
							Dog Walker
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" disabled />
						<label className="form-check-label" htmlFor="defaultCheck2">
							Find a Vet!
						</label>
					</div>
				</div>
				<br />
				<Link to="/calenderAppointments">
					<button className="btn btn-primary">go to calendar</button>
				</Link>
				<Link to="/">
					<button className="btn btn-primary">order merch</button>
				</Link>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
