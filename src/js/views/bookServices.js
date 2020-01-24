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
			{<div className="emptyDiv" />}
			<div className="body2 bookserviceCss">
				<div className="container general mx-auto">
					<div className="container">
						<h1> Book Services</h1>
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
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								defaultValue
								id="defaultCheck2"
								enabled
							/>
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

					<Link to="/modalfunction">
						<button className="btn btn-primary">Submit</button>
					</Link>
					<Link to="/">
						<button className="btn btn-primary">order merch</button>
					</Link>
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
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
