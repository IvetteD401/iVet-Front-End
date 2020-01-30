import React, { useState } from "react";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function ContactUs() {
	return (
		<>
			<div className="text-center mt-5">
				{/* Contact us */}
				<div className="jumbotron contactUs" id="contactUs">
					<h1 className="display-4">Got any questions?</h1>
					{/* <p c lassName="lead">Feel free to reach out to us.</p> */}
					<hr className="my-4" />
					<p>
						{/* It uses utility classes for typography and spacing to
						space content out within the larger container. */}
					</p>
					<button
						type="button"
						className="btn btn-primary btn-lg"
						href="#"
						role="button"
						data-toggle="modal"
						data-target="#exampleModalCenter">
						Contact Us
					</button>
				</div>
			</div>
			<div>
				{/* Modal */}
				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true">
					<div
						className="modal-dialog modal-dialog-centered"
						role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title w-100 text-center"
									id="exampleModalCenterTitle">
									Contact Us
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput">
											Full Name:
										</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput"
											placeholder="John Appleseed"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput2">
											Phone Number:
										</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput2"
											placeholder="(123) 456-7890"
										/>
									</div>
								</form>
								<form>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput">
											Email:
										</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput"
											placeholder="johnappleseed@email.com"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="exampleFormControlTextarea1">
											Message:
										</label>
										<textarea
											className="form-control"
											placeholder="Additional Notes"
											id="exampleFormControlTextarea1"
											rows={3}
											defaultValue={""}
										/>
									</div>

									{/* <div className="form-group">
										<label htmlFor="formGroupExampleInput2">
											Additional Notes:
										</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput2"
											placeholder="Message"
										/>
									</div> */}
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal">
									Cancel
								</button>
								<button
									type="button"
									className="btn btn-primary">
									Contact
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

 