import React from 'react';
import { Card } from 'react-bootstrap';

export const CardDescription = (props) => {
    
    let description = ""
    // type should be set in CardList
    if(props.type === "Characters"){
        description =  (
            <>
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Gender: </span>{props.data.result.properties.gender}</Card.Text> : <Card.Text>Loading</Card.Text>}
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Skin Color: </span>{props.data.result.properties.skin_color}</Card.Text>: <Card.Text>Loading</Card.Text>}
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Eye Color: </span>{props.data.result.properties.eye_color}</Card.Text>: <Card.Text>Loading</Card.Text>}
            </>
        )
    }
    else if (props.type==="Planets"){
        description = (
            <>
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Climate: </span>{props.data.result.properties.climate}</Card.Text>: <Card.Text>Loading</Card.Text>}
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Terrain: </span>{props.data.result.properties.terrain}</Card.Text>: <Card.Text>Loading</Card.Text>}
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Gravity: </span>{props.data.result.properties.gravity}</Card.Text>: <Card.Text>Loading</Card.Text>}
            </>
        )
    } 
    else if(props.type === "Vehicles"){
        description = (
            <>
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Vehicle Class: </span>{props.data.result.properties.vehicle_class}</Card.Text>: <Card.Text>Loading</Card.Text>}
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Manufacturer: </span>{props.data.result.properties.manufacturer}</Card.Text>: <Card.Text>Loading</Card.Text>}
            {props.data ? <Card.Text><span className='fw-bold fs-6'>Max speed: </span>{props.data.result.properties.max_atmosphering_speed}</Card.Text>: <Card.Text>Loading</Card.Text>}
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
        {props.data ? description : <Card.Text>Loading</Card.Text>} 
        </>
    )
} 