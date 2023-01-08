import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
export const Description = (props) => {

    let comp = props.data.map((data,i) => {

        // Delete all non usable properties:
        const dataProps = {...data}

        const propertiesToDelete = ['name', 'created', 'edited', 'homeworld', 'url', 'films', 'pilots'];

        for (let prop of propertiesToDelete) {
            delete dataProps.properties[prop];
        }

        const propertyKeys = Object.keys(dataProps.properties)

        

        const charactersiticsName = propertyKeys.map((key,i) => {
            return (<li className="text-danger fs-4" key={"ChaName"+i}>{key.replace(/_/g, " ").split(" ").map((w) => (w[0].toUpperCase() + w.slice(1))).join(" ")}</li>) 
        })

        const charactersitics = propertyKeys.map((key,i) => {
            return (<li className="text-danger fs-5" key={"Cha"+i}>{dataProps.properties[key]}</li>)
        })
        return ( 

        <Container  key={"C"+i}>
            <Row className="border-bottom border-danger border-3 pb-5">
                <Col>
                    <img src="https://via.placeholder.com/800x600?text=Image+of+Star+Wars+Character"></img>   
                </Col>
                <Col>
                    <h1 className="border-bottom mt-3">{data.properties.name}</h1>
                    <p className="fs-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </Col>
            </Row>
            <Row className="mt-3">
                <ul>
                    {charactersiticsName}
                </ul>
            </Row>
            <Row>
                <ul>
                    {charactersitics}
                </ul>
            </Row>
        </Container>)
    })

    return(
    <>
        {comp}
    </>
    )
}