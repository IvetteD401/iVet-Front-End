import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchResults = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-md-12">
			{store.breedSearchResult != undefined &&
				store.breedSearchResult.map((item, index) => {
					return (
						<>
							<div className="row mb-2">
								<div className="col-md-8">
									<div key={index} className="card">
										{item.name}
										{item.temperment}
									</div>
								</div>
								<div onClick={() => actions.addBreedInfo(item.name)} className="col-md-2">
									<div className="btn btn-info">+</div>
								</div>
							</div>
						</>
					);
				})}
		</div>
	);
};

SearchResults.propTypes = {
	match: PropTypes.object
};
