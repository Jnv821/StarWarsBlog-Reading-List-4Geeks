import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"

import { Description } from "../component/Description"

export const ItemDescription = () => {
    // Technically You could lift state up to the App Component to share the state of the fetch made here & between Home component.
    // I'm not so sure how to feel about having such logic and functions in the App component.
    // Even though the code is repeating here, I do feel this is cleaner, so this is a deliberate choice. 
    const location = useLocation().pathname
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api${location}`, {})
        .then(response => response.json())
        .then(data => setInfo([...info, data.result]))
        .catch(err => ("Error:" + err))
    }, [])

    useEffect(() => {
        console.log(info)
    }, [info])

    console.log(`%c The current path is ${JSON.stringify(location)}`, "color: #ff0000")


    return(
        <>
            <Description data={info}/>
        </>
    )
}