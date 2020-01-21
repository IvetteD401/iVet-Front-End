import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const BookServices = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{/* <div className="emptyDiv" /> */}
			<div className="container">
				Book Services
				<div>
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
				</div>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
