/*
import { useEffect } from "react";

import { useState } from "react";

import React from "react";

export default function FunctionFetch({ name }) {
    
    const [censuses, setCensuses] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false)

    // UseEffect React Hook has access to the state.
    useEffect(() =>  {
        var URL = "http://localhost:8000/api/census?name="+name
        fetch((URL))
        .then(res => res.json())
        .then (
             (data) => {
                 setIsLoaded(true);
                 setCensuses(data);
             },
             (error) => {
                 setIsLoaded(true);
                 setCensuses(error)
             }
         )
    },[name])
     // the array is to tell useEffect function of any dependencies; in this case-- name.
    
    
     // In the return curly braces are used for evaluation purposes. For example: if (error) create the div tag.
    // if not isloaded, create the Loading... message. else create the unordered list.
    return (
        <div>
           {/!* {error &&
                <div>Error: {error.message}</div>}
            {!isLoaded ?
                <div>Loading...</div> :
                <ul className="list-group">

                    {censuses.map((s) => ((<li className="list-group-item" key={s.city}>{s.city.replace('city', ',')}: population {s.census}</li>)))}
                </ul>}*!/}


        </div>
    );
}
*/
