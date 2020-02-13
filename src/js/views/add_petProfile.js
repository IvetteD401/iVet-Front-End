import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer";
import { BreedSearch } from "../component/breedSearch";
import { SearchResults } from "../views/searchResults";

export const AddPet = () => {
	const { actions } = useContext(Context);
	const [vetname, setVetname] = useState("");
	const [groomername, setGroomername] = useState("");
	const [petname, setPetname] = useState("");

	const [caregiver, setCaregiver] = useState("");
	const [breed, setbreed] = useState("");
	const [likes, setLikes] = useState("");
	return (
		<div className="container signup">
			<div className="about Padding-for-Div">
				{/* <form action="/action_page.php" style={{ border: "1px solid #ccc" }}> */}
				<h1 className="text-center mt-5">Add a new pet:</h1>
				{/* <div className="Padding-for-Div"> */}
				<form>
					<div className="form-group">
						{/* <label>Pet{"'"}s Name</label> */}
						<input
							type="text"
							className="form-control"
							placeholder="Pet Name"
							onChange={e => setPetname(e.target.value)}
						/>
					</div>
					<div className="form-group">
						{/* <label>Vet{"'"}s Name</label> */}
						<input
							type="text"
							className="form-control"
							placeholder="Vet Name"
							onChange={e => setVetname(e.target.value)}
						/>
					</div>
					<div className="form-group">
						{/* <label>Groomer{"'"}s Name</label> */}
						<input
							type="text"
							className="form-control"
							placeholder="Groomer Name"
							onChange={e => setGroomername(e.target.value)}
						/>
					</div>
					<div className="form-group">
						{/* <label>Care Giver</label> */}
						<input
							type="phone"
							className="form-control"
							placeholder="Enter care givers here"
							onChange={e => setCaregiver(e.target.value)}
						/>
					</div>
					<div className="form-group">
						{/* <label>Likes</label> */}
						<input
							type="text"
							className="form-control"
							placeholder="Enter likes"
							onChange={e => setLikes(e.target.value)}
						/>
					</div>
					<div>
						<form action="/action_page.php">
							Select files: <input type="file" name="myFile" multiple />
							<br />
							<br />
							{/* <button
								type="button"
								className="btn btn-lg btn-dark btn-block"
								data-toggle="modal"
								data-target="#exampleModal">
								Add my dogument!
							</button> */}
						</form>
						<BreedSearch />
						<div className="overflow-auto medications">
							<SearchResults />
						</div>
					</div>
					<Link to={"/petProfile"}>
						<button
							type="button"
							className="btn btn-lg btn-dark btn-block"
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
					{/* </div> */}
				</form>
				{/* </div> */}
				{/* </form> */}
			</div>
			<Footer />
		</div>
	);
};
