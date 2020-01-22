import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const CalenderAppointments = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{/* <div className="emptyDiv" /> */}
			<div>
				<ul className="nav nav-pills mb-3 justify-content-center bg-white" id="pills-tab" role="tablist">
					<li className="nav-item mt-2 mb-2">
						<a
							style={{ fontSize: "0.5rem", padding: ".7rem 1rem" }}
							className="nav-link active"
							id="pills-home-tab"
							data-toggle="pill"
							href="#pills-home"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true">
							<i className="fas fa-th fa-xm" />
						</a>
					</li>
					<li className="nav-item mt-2 mb-2">
						<a
							style={{ fontSize: "0.5rem", padding: ".7rem 1rem" }}
							className="nav-link"
							id="pills-profile-tab"
							data-toggle="pill"
							href="#pills-profile"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false">
							<i className="fas fa-square fa-xm" />
						</a>
					</li>
				</ul>
				<div className="tab-content" id="pills-tabContent">
					<div
						className="tab-pane fade show active"
						id="pills-home"
						role="tabpanel"
						aria-labelledby="pills-home-tab">
						<div className="container-fluid">
							<div className="row">
								<div className="col-4 px-1">
									<img
										src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
										width="100%"
										alt="random"
									/>
								</div>
								<div className="col-4 px-1">
									<img
										src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"
										width="100%"
										alt="random2"
									/>
								</div>
								<div className="col-4 px-1">
									<img
										src="https://images.unsplash.com/photo-1556634202-129a046351c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
										width="100%"
										alt="random"
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-4 p-1">
									<img
										src="https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
										width="100%"
										alt="random"
									/>
								</div>
								<div className="col-4 p-1">
									<img
										src="https://images.unsplash.com/photo-1495232808668-8bed30b9a3f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
										width="100%"
										alt="random2"
									/>
								</div>
								<div className="col-4 p-1">
									<img
										src="https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
										width="100%"
										alt="random"
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-4 p-1">
									<img
										src="https://images.unsplash.com/photo-1458080767772-b1011d305557?ixlib=rb-1.2.1&auto=format&fit=crop&w=2086&q=80"
										width="100%"
										alt="random"
									/>
								</div>
								<div className="col-4 p-1">
									<img
										src="https://images.unsplash.com/photo-1556079474-f4243dae6802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
										width="100%"
										alt="random2"
									/>
								</div>
								<div className="col-4 p-1">
									<img
										src="https://images.unsplash.com/photo-1551754809-38f1c2d6eea7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
										width="100%"
										alt="random"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* Second Tab */}
					<div
						className="tab-pane fade"
						id="pills-profile"
						role="tabpanel"
						aria-labelledby="pills-profile-tab">
						{/*Card 1*/}
						<div className="card mx-auto mt-5 shadow-lg" style={{ width: "50%" }}>
							<div className="card-body pt-1" style={{ width: "100%", padding: 0 }}>
								<div className="d-flex justify-content-between">
									<h3
										className="pl-2"
										style={{ fontFamily: "Lobster", textShadow: "2px 1px 1px rgb(214, 214, 214)" }}>
										Graffiti Dreams
									</h3>
									<p className="mt-2 mb-2 pr-2">7/4</p>
								</div>
								<img
									src="https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
									className="card-img-top"
									alt="Corridor"
								/>
								<h6 className="card-title pl-2 pt-2">47 Likes</h6>
								<p className="card-text pt-1 pl-2">
									Sometimes its in nightmares, other times its tranquility.{" "}
									<b>#Nightmare?#Insomnia</b>
								</p>
								<div className>
									<button
										type="button"
										className=" heart-icon btn"
										data-toggle="button"
										aria-pressed="false"
										autoComplete="off">
										<i className="far fa-heart p-0" />
									</button>
									<input type="text" placeholder="Comment..." />
									<i className="fas fa-ellipsis-v text-secondary float-right mt-1 mr-4" />
								</div>
							</div>
						</div>
						{/*Card 2*/}
						<div className="card mx-auto mt-5 shadow-lg" style={{ width: "50%" }}>
							<div className="card-body pt-1" style={{ width: "100%", padding: 0 }}>
								<div className="d-flex justify-content-between">
									<h3
										className="pl-2"
										style={{ fontFamily: "Lobster", textShadow: "2px 1px 1px rgb(214, 214, 214)" }}>
										Brick Wisdom
									</h3>
									<p className="mt-2 mb-2 pr-2">8/7</p>
								</div>
								<img
									src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
									className="card-img-top"
									alt="wall"
								/>
								<h6 className="card-title pl-2 pt-2">88 Likes</h6>
								<p className="card-text pt-1 pl-2">
									Creation is limitless, our tools are limited<b>#Imagine#Creation</b>
								</p>
								<div className>
									<button
										type="button"
										className=" heart-icon btn"
										data-toggle="button"
										aria-pressed="false"
										autoComplete="off">
										<i className="far fa-heart p-0" />
									</button>
									<input type="text" placeholder="Comment..." />
									<i className="fas fa-ellipsis-v text-secondary float-right mt-1 mr-4" />
								</div>
							</div>
						</div>
						{/*Card 3*/}
						<div className="card mx-auto mt-5 shadow-lg" style={{ width: "50%" }}>
							<div className="card-body pt-1" style={{ width: "100%", padding: 0 }}>
								<div className="d-flex justify-content-between">
									<h3
										className="pl-2"
										style={{ fontFamily: "Lobster", textShadow: "2px 1px 1px rgb(214, 214, 214)" }}>
										Wynwood Wall of Fame
									</h3>
									<p className="mt-2 mb-2 pr-2">9/20</p>
								</div>
								<img
									src="https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80"
									className="card-img-top"
									alt="wynwood"
								/>
								<h6 className="card-title pl-2 pt-2">102 Likes</h6>
								<p className="card-text pt-1 pl-2">
									Just Did It - Alternate Reality Nike <b>#hsoows?#backwards</b>
								</p>
								<div>
									<button
										type="button"
										className=" heart-icon btn"
										data-toggle="button"
										aria-pressed="false"
										autoComplete="off">
										<i className="far fa-heart p-0" />
									</button>
									<input type="text" placeholder="Comment..." />
									<i className="fas fa-ellipsis-v text-secondary float-right mt-1 mr-4" />
								</div>
							</div>
						</div>
						{/*Card 4*/}
						<div className="card mx-auto mt-5 shadow-lg" style={{ width: "50%" }}>
							<div className="card-body pt-1" style={{ width: "100%", padding: 0 }}>
								<div className="d-flex justify-content-between">
									<h3
										className="pl-2"
										style={{ fontFamily: "Lobster", textShadow: "2px 1px 1px rgb(214, 214, 214)" }}>
										Creators In Making
									</h3>
									<p className="mt-2 mb-2 pr-2">7/5</p>
								</div>
								<img src="photo/IMG_1007.jpg" className="card-img-top" alt="..." />
								<h6 className="card-title pl-2 pt-2">Infinite Likes - (Easter Egg unlocked!)</h6>
								<p className="card-text pt-1 pl-2">
									Struggling is part of the process, Embrace it.{" "}
									<b>#FutureSelfThanksYou#NeverGiveUp</b>
								</p>
								<div className>
									<button
										type="button"
										className=" heart-icon btn"
										data-toggle="button"
										aria-pressed="false"
										autoComplete="off">
										<i className="far fa-heart p-0" />
									</button>
									<input type="text" placeholder="Comment..." />
									<i className="fas fa-ellipsis-v text-secondary float-right mt-1 mr-4" />
								</div>
							</div>
						</div>
						{/*Card 5*/}
						<div className="card mx-auto mt-5 mb-5 shadow-lg" style={{ width: "50%" }}>
							<div className="card-body pt-1" style={{ width: "100%", padding: 0 }}>
								<div className="d-flex justify-content-between">
									<h3
										className="pl-2"
										style={{ fontFamily: "Lobster", textShadow: "2px 1px 1px rgb(214, 214, 214)" }}>
										We are all Astronauts
									</h3>
									<p className="mt-2 mb-2 pr-2">7/4</p>
								</div>
								<img
									src="https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
									className="card-img-top"
									alt="travelphoto"
								/>
								<h6 className="card-title pl-2 pt-2">62 Likes</h6>
								<p className="card-text pt-1 pl-2">
									We travel not to escape life, but for life not to escape us.{" "}
									<b>#travel#seetheworld</b>
								</p>
								<div className>
									<button
										type="button"
										className=" heart-icon btn"
										data-toggle="button"
										aria-pressed="false"
										autoComplete="off">
										<i className="far fa-heart p-0" />
									</button>
									<input type="text" placeholder="Comment..." />
									<i className="fas fa-ellipsis-v text-secondary float-right mt-1 mr-4" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<h1> CalenderAppointments </h1>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};
