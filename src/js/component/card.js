import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const CardComponent = (props) => {

    const people = props.data

    // This data should be provided by the API but it doesnt. So this will be a partial solution passing an index as prop.
    const description=["A person within the Star Wars universe", "A planet within the Star Wars univers", "A vehicle within the Star Wars univers"]

return (
<Card style={{width: "350px"}} className="mx-3 px-0">
    <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
            <Card.Title>{people.name}</Card.Title>
                <Card.Text>
                {description[props.descriptionIndex]}
                </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
</Card>
)
}