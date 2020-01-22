import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import React, { ReactNode, SyntheticEvent } from "react";
// import ApiCalendar from 'react-google-calendar-api';

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const BookServices = () => {
	// const { store, actions } = useContext(Context);

	//     fetch('https://www.googleapis.com/calendar/v3')
	//     .then(function(response) {
	// 	    if (!response.ok) {
	// 	    throw Error(response.statusText);
	// 		}
	// 		// Here is where you put what you want to do with the response.
	// 	})
	// 	.catch(function(error) {
	// 		console.log('Looks like there was a problem: \n', error);
	// 	});
	//      export default class DoubleButton extends React.Component {
	//       constructor(props) {
	//         super(props);
	//         this.handleItemClick = this.handleItemClick.bind(this);
	//       }

	//       public handleItemClick(event: SyntheticEvent<any>, name: string): void {
	//         if (name === 'sign-in') {
	//           ApiCalendar.handleAuthClick();
	//         } else if (name === 'sign-out') {
	//           ApiCalendar.handleSignoutClick();
	//         }
	//       }

	//       render(): ReactNode {
	//         return (
	//               <button
	//                   onClick={(e) => this.handleItemClick(e, 'sign-in')}
	//               >
	//                 sign-in
	//               </button>
	//               <button
	//                   onClick={(e) => this.handleItemClick(e, 'sign-out')}
	//               >
	//                 sign-out
	//               </button>
	//           );
	//       }
	//   }
	return (
		<>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
				Launch demo modal
			</button>
			{/* <div className="emptyDiv" /> */}
			<div className="container general">
				Book Services
				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">
									Modal title
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue
										id="defaultCheck1"
									/>
									<label className="form-check-label" htmlFor="defaultCheck1">
										Grooming Services
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue
										id="defaultCheck1"
									/>
									<label className="form-check-label" htmlFor="defaultCheck1">
										Dog Walker
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue
										id="defaultCheck2"
										disabled
									/>
									<label className="form-check-label" htmlFor="defaultCheck2">
										Find a Vet!
									</label>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
