import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { useEffect, useState } from 'react';

export const CardComponent = (props) => {
    
    const data = props.data
    // Clean the url "/https://www.swapi.tech/api/people/2" from props.data.url

    const url = props.data.url.split("/api/")[1]
    
    // This data should be provided by the API but it doesn't. So this will be a partial solution passing an index as a prop.
    const description=["A person within the Star Wars universe", "A planet within the Star Wars univers", "A vehicle within the Star Wars univers"]


return (
<Card style={{width: "350px"}} className="mx-3 px-0">
    <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                {description[props.descriptionIndex]}
                </Card.Text>
            <Button variant="primary"><Link to={url}>Go somewhere</Link></Button>
        </Card.Body>
</Card>
)
}