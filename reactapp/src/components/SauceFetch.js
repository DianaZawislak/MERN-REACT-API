/*import { create } from 'apisauce'

import { useEffect } from "react";

import { useState } from "react";

export default function SauceFetch({ name }) {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    
    
    useEffect(() => {
        //baseURL is the api URL by itself
        const api = create({
            baseURL:"http://localhost:8080/api"

        });
        api.get("/census?name=" +name)
            .then((response) => response.data)
            .then((data) => {
                setIsLoaded(true);
                setData(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }

            );

    
    }, [name]) // the array is to tell useEffect function of any dependencies.
    // if a dependency should change, it will re-render. In this case the array is empty: there are no dependencies.

    return (
        <div>
            {/!*{error &&
                <div>Error: {error.message}</div>}
            {!isLoaded ?
                <div>Loading...</div> :
                <ul className="list-group">

                    {data.map((s) => ((<li className="list-group-item" key={s.city}>{s.city.replace('city', ',')}: population {s.census}</li>)))}
                </ul>}*!/}



        </div>
    );
}*/