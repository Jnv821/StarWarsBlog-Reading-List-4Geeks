import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"

import { Description } from "../component/Description"

export const ItemDescription = () => {

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