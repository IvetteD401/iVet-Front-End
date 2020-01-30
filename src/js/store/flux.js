const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			login: [{}],
			breeds: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
					if (u === index) elm.console = useState;
					return elm;
				});
				//reset the global store
				setStore({ Doguments: Doguments, breedSearch });
			}
		}
	};
};

export default getState;
