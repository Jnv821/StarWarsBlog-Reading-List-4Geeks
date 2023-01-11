import React from 'react';
import { Card } from 'react-bootstrap';

export const CardDescription = (props) => {
    
    let description = ""
    // type should be set in CardList
    if(props.type === "Characters"){
        description =  (
            <>
            <Card.Text><span className='fw-bold fs-6'>Gender: </span>{props.data.gender}</Card.Text>
            <Card.Text><span className='fw-bold fs-6'>Skin Color: </span>{props.data.skin_color}</Card.Text>
            <Card.Text><span className='fw-bold fs-6'>Eye Color: </span>{props.data.eye_color}</Card.Text>
            </>
        )
    }
    else if (props.type==="Planets"){
        description = (
            <>
            <Card.Text><span className='fw-bold fs-6'>Climate: </span>{props.data.climate}</Card.Text>
            <Card.Text><span className='fw-bold fs-6'>Terrain: </span>{props.data.terrain}</Card.Text>
            <Card.Text><span className='fw-bold fs-6'>Gravity: </span>{props.data.gravity}</Card.Text>
            </>
        )
    } 
    else if(props.type === "Vehicles"){
        description = (
            <>
            <Card.Text><span className='fw-bold fs-6'>Vehicle Class: </span>{props.data.vehicle_class}</Card.Text>
            <Card.Text><span className='fw-bold fs-6'>Manufacturer: </span>{props.data.manufacturer}</Card.Text>
            <Card.Text><span className='fw-bold fs-6'>Max speed: </span>{props.data.max_atmosphering_speed}</Card.Text>
            </>
        )
    }
    else {
        description = (
            <>
            <Card.Text>Loading...</Card.Text>
            </>
        )
    }
    
    return (
        <>
        {description}
        </>
    )
} 