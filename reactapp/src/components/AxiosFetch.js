/*
import { useEffect } from "react";

import { useState } from "react";

import axios from 'axios';
import { response } from "express";

export default function AxiosFetch({ name }) {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
          axios.get("http://localhost:8080/api/census?name="+name)
           .then(response => {
               setData(response.data)
               setIsLoaded(true);
           })
           .catch(error =>{
               setIsLoaded(true);
               setError(error);
           })

    }, [name]) // the array is to tell useEffect function of any dependencies.
    // if a dependency should change, it will re-render. In this case the array is empty: there are no dependencies.

    return (
        <div>

        </div>
    );
}*/
