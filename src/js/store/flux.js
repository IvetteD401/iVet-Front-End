const url = "https://3000-b0ec813b-b296-4c70-8c70-72300d7eb0e8.ws-us02.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			login: [{}],
			breeds: [{}],
			breedSearchParam: "",
			breedsSearch: [],
			weight: [{}],
			height: [{}],
			name: [{}],
			bred_for: [{}],
			breed_group: [{}],
			life_span: [{}],
			temperament: [{}],
			origin: [{}],
			pet_profile: []
		},
		actions: {
			loadPet_Profile() {
				fetch(url + "records")
					.then(response => response.json())
					.then(result => {
						console.log("Get profile", result),
							setStore({
								pet_profile: result
							});
					})
					.catch(e => console.error(e));
			},
			// post to petProfile
			addPet_Profile(
				vetname,
				groomername,
				vetaddress,
				groomeraddress,
				insurance_policy,
				insurance_provider,
				petname,
				caregiver,
				likes
			) {
				fetch("https://3000-b0ec813b-b296-4c70-8c70-72300d7eb0e8.ws-us02.gitpod.io/records", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						vet_name: vetname,
						groomer_name: groomername,
						vet_address: vetaddress,
						groomer_address: groomeraddress,
						insurance_policy: insurance_policy,
						insurance_provider: insurance_provider,
						petname: petname,
						caregiver: caregiver,
						likes: likes
					})
				}).then(() => {
					fetch(url + "records")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									pet_profile: result
								});
						})
						.catch(e => console.error(e));
				});
			},
			// delete petProfile
			deletePet_Profile(id) {
				fetch(url + id, {
					method: "delete"
				}).then(() => {
					fetch(url + "records")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									pet_profile: result
								});
						})
						.catch(e => console.error(e));
				});
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			setBreedSearchParam: param => {
				setStore({ breedSearchParam: param });
			},
			searchBreed: () => {
				fetch("https://api.thedogapi.com/v1/breeds/search?q=" + encodeURIComponent(getStore().breedSearchParam))
					.then(Response => Response.json())
					.then(result => {
						console.log("result", result),
							setStore({
								breedsSearch: result
							});
					});
			},
			Breedinfo: () => {
				fetch("https://api.thedogapi.com/v1/breeds")
					.then(Response => Response.json())
					.then(result => {
						console.log("result", result),
							setStore({
								breeds: result
							});
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const Doguments = store.Doguments.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				const breedSearch = store.breedSearch.map((elm, i) => {
					if (u2 === index) elm.console = useState;
					return elm;
				});
				//reset the global store
				setStore({ Doguments: Doguments, breedSearch });
			}
		}
	};
};

export default getState;
