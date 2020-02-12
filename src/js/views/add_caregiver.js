import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddPet = () => {
	const { actions } = useContext(Context);
	const [vetname, setVetname] = useState("");
	const [groomername, setGroomername] = useState("");
	const [petname, setPetname] = useState("");
	// const [insurance_policy, setInsurance__policy] = useState("");
	// const [insurance_provider, setInsurance__provider] = useState("");
	// const [vet_address, setVet_address] = useState("");
	// const [groomer_address, setGroomer_address] = useState("");
	const [caregiver, setCaregiver] = useState("");
	const [breed, setbreed] = useState("");
	const [likes, setLikes] = useState("");
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new pet</h1>
				<form>
					<div className="form-group">
						<label>Pet{"'"}s Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Pet Name"
							onChange={e => setPetname(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Vet{"'"}s Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vet Name"
							onChange={e => setVetname(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Groomer{"'"}s Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vet Name"
							onChange={e => setGroomername(e.target.value)}
						/>
					</div>
					{/* <div className="form-group">
						<label>Vet{"'"}s Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vet Name"
							onChange={e => setVet_address(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Groomer{"'"}s Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vet Name"
							onChange={e => setGroomer_address(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Insurance Policy</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter policy info"
							onChange={e => setInsurance__policy(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Insurance Provider</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter policy provider info"
							onChange={e => setInsurance__provider(e.target.value)}
						/>
					</div> */}
					<div className="form-group">
						<label>Care Giver</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter care givers here"
							onChange={e => setCaregiver(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Likes</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter likes"
							onChange={e => setLikes(e.target.value)}
						/>
					</div>
					<Link to={"/petProfile"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.addPet_Profile(
									vetname,
									groomername,
									// vet_address,
									// groomer_address,
									// insurance_policy,
									// insurance_provider,
									petname,
									caregiver,
									likes
								);
							}}>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
				<br />
				<br />
			</div>
		</div>
	);
};
