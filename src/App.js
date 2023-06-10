import ReactDOM from "react-dom/client";
import React from "react";
//import { Route, Switch } from "react-router";
//import { BrowserRouter, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from "./home";
import Data from "./fdata";
import Fromsql from "./fromsql"
import Day06 from "./day06"
import Steffenplots from "./steffenplots"


const App = () => (


<>
<Router>
  <Routes>
    <Route path="/" element={ <Home />} />
    <Route path="/home" element={ <Home />} />
    <Route path="/data" element = {< Data />} />
    <Route path="/fromsql" element = {< Fromsql />} />
    <Route path="/steffenplots" element = {< Steffenplots />} />
    <Route path="/day06" element = {< Day06 />} />

  </Routes>
</Router>
</>
    );
export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)




 //<> <Home />    </>