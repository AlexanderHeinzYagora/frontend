import React, {useState, useEffect} from "react";
import Plot from 'react-plotly.js';

const Fromsql = () => {




    const [Categories, setCategories] = useState({});
    const [Companies, setCompanies] = useState({});
    const [Brands, setBrands] = useState({});
    const [Trends, setTrends] = useState({});

    //const Productlist = data.map(trend => <trend name={data.trend} />);
//     Bakery: "",
//     Freezer: "",
// Breakfast: "",
// Snacking: "",
// Pantry: "",
// Dairy: "",
// Chilled: "",
// Non:""

  useEffect(() => {
            // Using fetch to fetch the api from 
            // flask server it will be redirected to proxy
            fetch("/fromsql")
            .then((res) =>
                res.json()
                .then((data) => 
                setCategories(data.categories)
                    //console.log(data)
                )
            );
        }, []);

  useEffect(() => {
        fetch("/fromsql")
        .then((res) =>
            res.json()
            .then((data) => 
            setCompanies(data.companies)
                //console.log(data.companies)
            )
        );
    }, []);

    useEffect(() => {
    fetch("/fromsql")
    .then((res) =>
        res.json()
        .then((data) => 
        setBrands(data.brands)
            //console.log(data.companies)
            )
        );
    }, []);

    useEffect(() => {
    fetch("/fromsql")
    .then((res) =>
        res.json()
        .then((data) => 
        setTrends(data.trends)
            //console.log(data.companies)
            )
        );
    }, []);


    return(
        <div>
            Hi!     
    
        Python tells me this: <p>{Object.keys(Categories)

                    }
                    {console.log(Object.keys(Categories))}</p>
        

        <Plot
      data={[
        {
          x: Object.keys(Categories),//["Non alcoholic Beverages", "Freezer", "Breakfast", "Snacking", "Dairy"],
          y: Object.values(Categories),//[Categories.Non_alcoholic_Beverages, Categories.Freezer, Categories.Breakfast, Categories.Snacking, Categories.Dairy],
          type: 'bar',
          transforms: [{
            type: "sort",
            target: 'y',
            order: 'descending'
          }]
          //mode: 'markers',
          //marker: {color: 'red'},
        },
       // {type: 'bar', x: ["Bakery", "Freezer", "Breakfast", "Snacking"], y: [Products.Bakery, Products.Freezer, Products.Breakfast, Products.Snacking]},
      ]}
      layout={ {width: 640, height: 480, title: 'Last 1000 Products, Top 5 Categories'} } />
    

    <Plot
      data={[
        {
          x: Object.keys(Companies),
          y: Object.values(Companies),
          type: 'bar',
          transforms: [{
            type: "sort",
            target: 'y',
            order: 'descending'
          }]
          //mode: 'markers',
          //marker: {color: 'red'},
        },
       // {type: 'bar', x: ["Bakery", "Freezer", "Breakfast", "Snacking"], y: [Products.Bakery, Products.Freezer, Products.Breakfast, Products.Snacking]},
      ]}
      layout={ {width: 640, height: 480, title: 'Last 1000 Products, Top 5 Companies'} } />

    <Plot
      data={[
        {
          x: Object.keys(Brands),
          y: Object.values(Brands),
          type: 'bar',
          transforms: [{
            type: "sort",
            target: 'y',
            order: 'descending'
          }]
          //mode: 'markers',
          //marker: {color: 'red'},
        },
       // {type: 'bar', x: ["Bakery", "Freezer", "Breakfast", "Snacking"], y: [Products.Bakery, Products.Freezer, Products.Breakfast, Products.Snacking]},
      ]}
      layout={ {width: 640, height: 480, title: 'Last 1000 Products, Top 5 Brands'} } />


    <Plot
      data={[
        {
          x: Object.keys(Trends),//["Non alcoholic Beverages", "Freezer", "Breakfast", "Snacking", "Dairy"],
          y: Object.values(Trends),//[Categories.Non_alcoholic_Beverages, Categories.Freezer, Categories.Breakfast, Categories.Snacking, Categories.Dairy],
          type: 'bar',
          transforms: [{
            type: "sort",
            target: 'y',
            order: 'descending'
          }]
          //mode: 'markers',
          //marker: {color: 'red'},
        },
       // {type: 'bar', x: ["Bakery", "Freezer", "Breakfast", "Snacking"], y: [Products.Bakery, Products.Freezer, Products.Breakfast, Products.Snacking]},
      ]}
      layout={ {width: 640, height: 480, title: 'Last 1000 Products, Top 5 Trends'} } />


        <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={ {width: 320, height: 240, title: 'A Fancy Plot'} } />
    


    
        </div>

    )



};
export default Fromsql



//        <code>{Products.trend}</code>

        //{items.map((item) => <SubComponent key={item.id} title={item.title} />)}
       {/* {Products.trend.map( (project, key) => {
            return <p key={key}> {project.trend} </p>;
        }) } */}