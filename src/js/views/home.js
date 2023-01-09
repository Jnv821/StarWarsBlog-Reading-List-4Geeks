import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/home.css";

import { CardComponent } from "../component/card.js"
import { CardList } from "../component/cardList.js";

export const Home = (props) => {
	// Define State variables

	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const [peopleCharacteristics, setPeopleCharacteristics] = useState([])
	const [planetCharacteristics, setPlanetCharacteristics] = useState([])
	const [vehiclesCharactersitics, setVehiclesCharacteristics] = useState([])
	// fetch all the required data

	// Fetch: People. 
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people", {})
		.then(response => response.json())
		.then(data => { 
			// Set the array for CardList
			setPeople([...data.results])
			// Set the Array for Card Information.

			data.results.forEach((ele) => {
				fetch(ele.url, {})
				.then(response => response.json())
				.then(ele => {
					setPeopleCharacteristics((peopleCharacteristics) => [...peopleCharacteristics, ele.result.properties])
					})
				.catch(err => console.log("%c Error: " + err, "color: #ff2200"))
			})	
		})
		.catch(err => console.log("Error: " + err))
	}, [])

	//Fetch: Planets
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets", {})
		.then(response => response.json())
		.then(data => {
			// Set the Array for CardList
			setPlanets([...data.results])
			// Set the Array for Card Information.
			data.results.forEach((ele) => {
				fetch(ele.url, {})
				.then(response => response.json())
				.then(ele => {
					setPlanetCharacteristics((planetCharacteristics) => [...planetCharacteristics, ele.result.properties])
				})
			})	
		})
		.catch(err => "Error: " + err)
	}, [])

	//Fetch: Vehicles

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles",{})
		.then(response => response.json())
		.then(data => {
			// Set the Array for CardList
			setVehicles([...data.results])
			// Set the array for Card Information
			data.results.forEach((ele) => {
				fetch(ele.url, {})
				.then(response => response.json())
				.then( ele => {
					setVehiclesCharacteristics((vehiclesCharactersitics) => [...VehiclesCharacteristics, ele.result.properties])
				})
			})
		})
		.catch(err => "Error: " + err)
	}, [])
	
	// Log the data
	useEffect(() => {
	console.group("StarWars API DATA")
		console.group("People Data")
		console.log(people)
		console.group("Specific People Data")
		console.log(peopleCharacteristics)
		console.groupEnd()
		console.groupEnd()

		console.group("Planet Data")
		console.log(planets)
		console.groupEnd()

		console.group("Vehicle Data")
		console.log(vehicles)
		console.groupEnd()
	console.groupEnd()

	}, [people, planets, vehicles])
return (
	<>
		<CardList data={people} descriptionIndex={0} title={"Characters"} handleFavorites={props.handleFavorites}/>
		<CardList data={planets} descriptionIndex={1} title={"Planets"} handleFavorites={props.handleFavorites}/>
		<CardList data={vehicles} descriptionIndex={2} title={"Vehicles"} handleFavorites={props.handleFavorites}/>
	</>
)};
