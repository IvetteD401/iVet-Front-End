import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const BreedSearch = () => {
	// const { store, actions } = useContext(Context);

	return (
		<>
        <h1>Breed Search</h1>

        <ul class="list-group">
  <li class="list-group-item active">Dobberman</li>
  <li class="list-group-item">Eskimo dog</li>
  <li class="list-group-item">French bulldog</li>
  <li class="list-group-item">mastiff</li>
  <li class="list-group-item">schnauzer</li>
</ul>
			
		</>
	);
};
