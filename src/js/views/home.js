import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/home.css";

import { CardList } from "../component/cardList.js";

export const Home = () => {
	
	// Define State variables

	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	// fetch all the required data

	// Fetch: People. 
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people", {})
		.then(response => response.json())
		.then(data => { setPeople([...data.results]) })
		.catch(err => console.log("Error: " + err))
	}, [])

	//Fetch: Planets
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets", {})
		.then(response => response.json())
		.then(data => { setPlanets([...data.results]) })
		.catch(err => "Error: " + err)
	}, [])

	//Fetch: Vehicles

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles",{})
		.then(response => response.json())
		.then(data => {setVehicles([...data.results])})
		.catch(err => "Error: " + err)
	}, [])
	
return (
	<>
	<CardList data={people} title={"Characters"}/>
	<CardList data={planets} title={"Planets"}/>
	<CardList data={vehicles} title={"Vehicles"}/>
	</>
)};
