// Importing modules
import React, { useState, useEffect } from "react";
//import "./App.css";



const Data = () => {

        const [data, setdata] = useState({
                name: "",
                age: 0,
                date: "",
                programming: "",
            });

            useEffect(() => {
            // Using fetch to fetch the api from 
            // flask server it will be redirected to proxy
            fetch("/data").then((res) =>
                res.json().then((data) => {
                    // Setting a data from api
                    setdata({
                    name: data.Name,
                        age: data.Age,
                        date: data.Date,
                       programming: data.programming,
                    });
    console.log("test");
                })
            );
        }, []);
        
    return(
          <div className="App">
                    <header className="App-header">
                        <h1>React and flask</h1>
        
                        <p>{data.name}</p>
                        <p>{data.age}</p>
                        <p>{data.date}</p>
                        <p>{data.programming}</p>
          
                    </header>
                </div>
)
    };
export default Data;
