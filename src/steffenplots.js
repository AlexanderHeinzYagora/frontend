import React, {useState, useEffect} from "react";
import Plot from 'react-plotly.js';



const Steffenplots = () => {



    const [Categories, setCategories] = useState({});
    const [Companies, setCompanies] = useState({});
    const [Brands, setBrands] = useState({});
    const [Trends, setTrends] = useState({});



    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/steffenplots")
        .then((res) =>
            res.json()
            .then((data) => 
            //setCategories(data.categories)
                console.log(data)
            )
        );
    }, []);




}
export default Steffenplots;
