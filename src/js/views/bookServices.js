import React, { useState, useEffect, useContext, ReactNode, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Example from "../component/datepicker";
import "../../styles/demo.scss";

export const BookServices = () => {
	const { store, actions } = useContext(Context);
	// var NewComponent = React.createClass({
	//      render: function() {

	return (
		<>
			<section className="emptyDiv"></section>

			<h1> Book Services</h1>
			<div className="row about mx-auto">
				<br />
				<br />
				<div className="col-4">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1">
							Grooming Services
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1">Message for service provider</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={3}
									defaultValue={""}
								/>
							</div>
						</label>
						<Example />
					</div>
				</div>
				<div className="col-4">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1">
							Dog Walker
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1">Message for service provider</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={3}
									defaultValue={""}
								/>
							</div>
						</label>
						<Example />
					</div>
				</div>
				<div className="col-4">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" enabled />
						<label className="form-check-label" htmlFor="defaultCheck2">
							Find a Vet!
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1">Message for service provider</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={3}
									defaultValue={""}
								/>
							</div>
						</label>
						<Example />
					</div>
				</div>
				<br />
				<div className="row">
					{/* <div className="col-4">
						<Link to="/">
							<button className="btn btn-lg btn-secondary btn-block">take me home</button>
						</Link>
					</div> */}
					<div className="col">
						<button
							type="button"
							className="btn btn-lg btn-dark btn-block"
							data-toggle="modal"
							data-target="#exampleModal">
							Book!
						</button>
					</div>
				</div>
			</div>

			{/* modal */}
			<div
				className="modal fade"
				id="exampleModal"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content general">
						<div className="modal-header">
							<h2 className="modal-title" id="exampleModalLabel">
								Congratulations!!{" "}
							</h2>{" "}
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<h4>Your appointment is set.</h4>
						</div>
						{/* <div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								close
							</button>
							<Link to="/petProfile/">
								{" "}
								<button type="button" className="btn btn-primary">
									go home
								</button>
							</Link>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};
// {/* <>

//       <div className="container">
//         <h2>Modal Example</h2>
//         {/* Trigger the modal with a button */}
//         <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
//         {/* Modal */}
//         <div className="modal fade" id="myModal" role="dialog">
//           <div className="modal-dialog">
//             {/* Modal content*/}
//             <div className="modal-content">
//               <div className="modal-header">
//                 <button type="button" className="close" data-dismiss="modal">×</button>
//                 <h4 className="modal-title">Modal Header</h4>
//               </div>
//               <div className="modal-body">
//                 <p>Some text in the modal.</p>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// });
// </> */}
