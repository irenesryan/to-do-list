import React from 'react';
import ReactDOM from 'react-dom/client';
//component file
import ToDoContainer from './functionBased/components/ToDoContainer';

//stylesheet
import "./functionBased/App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ToDoContainer />
    </React.StrictMode>
)
