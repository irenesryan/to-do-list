import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom";

//component
import ToDoContainer from "./functionBased/components/ToDoContainer"

//stylesheet
import "./functionBased/App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(    
        <Router basename={process.env.PUBLIC_URL}>
            <ToDoContainer />
        </Router>    
)
/* 
ReactDOM.render(
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <ToDoContainer />
      </Router>  
    </React.StrictMode>, 
    document.getElementById("root")
  ); */