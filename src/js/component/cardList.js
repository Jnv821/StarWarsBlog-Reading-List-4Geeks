import React, { useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import { CardComponent } from './card.js';

export const CardList = (props) => {

    const cards = props.data.map((element, i) => {
        return(<CardComponent key={i} data={props.data[i]} type={props.title} info={props.info[i]}/>)
    })

    return (
        <Container>
            <h1>{props.title}</h1>
            <Row className='cardList'>
                {props.info.length ? cards : <h1>Loading</h1>}
            </Row>
        </Container>
    )
}