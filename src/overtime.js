import React, {useState, useEffect} from "react";
import Plot from 'react-plotly.js';




const OverTime = () => {


    const [PlotData, setPlotData] = useState({});


    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/overtime")
        .then((res) =>
            res.json()
            .then((data) => 
            //setCategories(data.categories)
                console.log(data)
            )
        );
    }, []);


return(
    <div>
        Hi!     

    Python tells me this: <p>{ Object.keys(data) } </p>
    </div>

)
