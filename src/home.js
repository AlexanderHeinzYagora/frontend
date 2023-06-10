import React, {useState, useEffect} from "react";

import NameForm from "./Form";


// const [data, setData] = useState([""])


// const Form = ({userInput}) => {

//     const handleChange = (event) => {
//         console.log(event.target.value)
//     }

//     return(<div>
// <NameForm></NameForm>
// </div>
//     )
// }

const Home = () => {
    
        const [name, setName] = useState({name: "this",
                                            bla: ""});

            useEffect(() => {
            // Using fetch to fetch the api from 
            // flask server it will be redirected to proxy
            fetch("/home").then((res) =>
                res.json().then((data) => {
                    // Setting a data from api
                    setName({name:data.Name,
                            bla:data.bla
                    });
                })
            );
        }, []);
    
    
    return(
    <div>
        Hi! 
         <NameForm/> 

    Your Name is 

    Python tells me this: <p>{name.name}</p>

    </div>


)
    };
export default Home;
