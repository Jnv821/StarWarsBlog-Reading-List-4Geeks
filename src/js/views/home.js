import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/home.css";

import { CardList } from "../component/cardList.js";

export const Home = () => {
	
	// Define State variables

	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [peopleCharacteristics, setPeopleCharacteristics] = useState([])
	const [planetCharacteristics, setPlanetCharacteristics] = useState([])
	const [vehiclesCharacteristics, setVehiclesCharacteristics] = useState([])
	
	// Sorting function
	

	// fetch all the required data

	
	// Fetch: People. 
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people", {})
		.then(response => response.json())
		.then(data => {
			
			setPeople([...data.results]) 
			
			data.results.forEach((datapoint) => {
				fetch(datapoint.url, {})
				.then(response => response.json())
				.then(datapoint => {
					setPeopleCharacteristics((peopleCharacteristics) => [...peopleCharacteristics, datapoint])
				
					setPeopleCharacteristics((peopleCharacteristics) => (peopleCharacteristics.sort(function (a, b) {
						if (parseInt(a.result.uid) > parseInt(b.result.uid)) {
							return 1;
						}
						if (parseInt(a.result.uid) < parseInt(b.result.uid)) {
							return -1;
						}
						return 0;
					})))
			
				
				})
				.catch((err) => console.log("Error:" + err))
			})
		})
		.catch(err => console.log("Error: " + err))
	}, [])
	
	//Fetch: Planets
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets", {})
		.then(response => response.json())
		.then(data => { 
			
			setPlanets([...data.results]) 
		
			data.results.forEach((datapoint) => {
				fetch(datapoint.url, {})
				.then(response => response.json())
				.then(datapoint => {
					setPlanetCharacteristics(planetCharacteristics => [...planetCharacteristics, datapoint])
					
					setPlanetCharacteristics((planetCharacteristics) => (planetCharacteristics.sort(function (a, b) {
						if (parseInt(a.result.uid) > parseInt(b.result.uid)) {
							return 1;
						}
						if (parseInt(a.result.uid) < parseInt(b.result.uid)) {
							return -1;
						}
						return 0;
					})))
				})
				.catch((err) => console.log("Error: " + err))
			})
		})
		.catch(err => "Error: " + err)
	}, [])

	//Fetch: Vehicles

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles",{})
		.then(response => response.json())
		.then(data => {
			setVehicles([...data.results])
		
			data.results.forEach((datapoint) => {
				fetch(datapoint.url, {})
				.then(response => response.json())
				.then(datapoint => {setVehiclesCharacteristics((vehiclesCharacteristics) => [...vehiclesCharacteristics, datapoint])
				
					setVehiclesCharacteristics((vehiclesCharacteristics) => (vehiclesCharacteristics.sort(function (a, b) {
						if (parseInt(a.result.uid) > parseInt(b.result.uid)) {
							return 1;
						}
						if (parseInt(a.result.uid) < parseInt(b.result.uid)) {
							return -1;
						}
						return 0;
					})))
				})
			})

			
		})
		.catch(err => "Error: " + err)
	}, [])
	
return (
	<>
	<CardList data={people} title={"Characters"} info={peopleCharacteristics}/>
	<CardList data={planets} title={"Planets"} info={planetCharacteristics}/>
	<CardList data={vehicles} title={"Vehicles"} info={vehiclesCharacteristics}/>
	</>
)};
