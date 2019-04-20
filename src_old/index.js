import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App";
import * as serviceWorker from "./serviceWorker";

/**
 * Crearé dos APP, para mostrar ambas formas en las que hice este boiler
 * La App, es la que no me funciona y tiene el reducer e initialState en un archivo aparte
 * (Esto es lo que quiero mejorar)
 * 
 * La App2, es la que tiene el reducer e initialState en el mismo archivo y funciona 'correctamente', 
 * como el ejemplo de la web
 * (Esto no me gusta mucho como está, pero funciona)
 */

//Ejemplo que no funciona con reducer y initialStates en el otro archivo
// ReactDOM.render(<App />, document.getElementById("root")); 

//Ejemplo que funciona con reducer y initialStates en el mismo archivo
ReactDOM.render(<App2 />, document.getElementById("root")); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
