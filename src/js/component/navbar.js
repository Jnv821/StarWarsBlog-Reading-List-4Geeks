import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown'
import { Badge } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Navbar = (props) => {
	
	const dropdownFavorites = props.favorites.map((favorite, i) => {
		return(
		<Dropdown.Item key={i}>{favorite}<FontAwesomeIcon className="float-end" icon={faTrash} onClick={() => props.handleFavorites(i)}/></Dropdown.Item> 
		)
	})
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<FontAwesomeIcon icon={faJedi} className="brandName"/>
			</Link>
			<div className="ml-auto">
			<Dropdown autoClose="outside" className="mx-3">
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
			Favorites<Badge bg="secondary">{props.favorites.length}</Badge>
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{props.favorites.length === 0 ? <Dropdown.Item>None</Dropdown.Item> : dropdownFavorites} 
			</Dropdown.Menu>
    </Dropdown>
			</div>
		</nav>
	);
};
