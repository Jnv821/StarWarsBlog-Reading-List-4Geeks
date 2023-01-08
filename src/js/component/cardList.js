import React from 'react';
import { useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import { CardComponent } from './card.js';

export const CardList = (props) => {

    const cards = props.data.map((element, i) => {
        return(<CardComponent descriptionIndex={props.descriptionIndex} key={i} data={props.data[i]}/>)
    })

    return (
        <Container>
            <h1>{props.title}</h1>
            <Row className='cardList'>
                {cards}
            </Row>
        </Container>
    )
}