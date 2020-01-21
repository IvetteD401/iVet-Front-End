import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Doguments = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{/* <div className="emptyDiv" /> */}
			{/* <div className="emptyDiv" /> */}
			<div className="container">
				{/* tabs for navigating views (thumbnail vs cards) */}
				<ul className="justify-content-center nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="pills-home-tab"
							data-toggle="pill"
							href="#pills-home"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true">
							<i className="fa fa-th" />
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="pills-profile-tab"
							data-toggle="pill"
							href="#pills-profile"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false">
							<i className="fa fa-square" />
						</a>
					</li>
				</ul>
				{/* thumbnail view */}
				<div className="tab-content" id="pills-tabContent">
					<div
						className="mx-auto tab-pane fade show active"
						id="pills-home"
						role="tabpanel"
						aria-labelledby="pills-home-tab">
						{/* card groups begin here */}
						<div className="card-group">
							<div className="card">
								<img
									src="https://cdn.pixabay.com/photo/2019/11/18/00/38/brown-and-white-dog-4633734__340.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									width="100%"
									src="https://cdn.pixabay.com/photo/2018/03/07/16/37/pink-flamingo-3206415__340.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									src="https://cdn.pixabay.com/photo/2019/10/15/19/00/alpine-4552654__340.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
						</div>
					</div>
					{/* view as a feed */}
					<div
						className="p-3 mb-2 bg-light text-dark tab-pane fade"
						id="pills-profile"
						role="tabpanel"
						aria-labelledby="pills-profile-tab">
						<div className="w-50 mx-auto card text-left">
							<div className="card-header bg-white">My First Photo</div>
							<div className="p-0 card-body">
								<img
									src="https://cdn.pixabay.com/photo/2019/11/18/00/38/brown-and-white-dog-4633734__340.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="bg-white card-footer text-muted">
								<i className="fa fa-heart" />
								<i className="fa fa-comment" />
								<i className="fa fa-paper-plane" />
								<span> 441 likes </span>
								<i className="float-right fa fa-ellipsis-v" />
								<p> mjgrnjuirhgbuhrtgjuibhrtgjuihrgrtguihruihv </p>
							</div>
						</div>
						<br />
						<div className="w-50 mx-auto card text-left">
							<div className="card-header bg-white">My Second Photo</div>
							<div className="p-0 card-body">
								<img
									src="https://cdn.pixabay.com/photo/2018/03/07/16/37/pink-flamingo-3206415__340.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-footer text-muted bg-white">
								<span> 784 likes </span>
								<i className="float-right fa fa-ellipsis-v" />
								<p> euirjheihbujifhbjuirnbkrn</p>
							</div>
						</div>
						<br />
						<div className="w-50 mx-auto card text-left">
							<div className="card-header bg-white">My Third Photo</div>
							<div className="p-0 card-body">
								<img
									src="https://cdn.pixabay.com/photo/2019/10/15/19/00/alpine-4552654__340.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-footer text-muted bg-white">
								<span> 451 likes </span>
								<i className="float-right fa fa-ellipsis-v" />
								<p> hbfevjhdbvjhbvhbvjknrvjrjkbnjkrn</p>
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
