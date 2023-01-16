import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { CardDescription } from './cardDescription';


export const CardComponent = (props) => {
    
    const {actions} = useContext(Context)

        const data = props.data
        // Clean the url "/https://www.swapi.tech/api/people/2" from props.data.url
    
        const url = props.data.url.split("/api/")[1]
    
return (
    <Card style={{width: "400px"}} className="mx-3 px-0">
        <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                    <CardDescription type={props.type} data={props.info}/>
                <Link to={url}><Button variant="outline-primary">Learn More!</Button></Link>
            <Button variant="outline-warning float-end" onClick={() => actions.addFavorites(data.name)}><FontAwesomeIcon icon={faHeart}/></Button>
        </Card.Body>
    </Card>
)}