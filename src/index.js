import React from "react";
import  ReactDOM  from "react-dom"; //el react y react dom vienen del node_modules
import App from './App' //aca se importa la carpeta App para que el App de la linea 5 sea coherente.

ReactDOM.render(<App/>, document.querySelector("#root"));//esta funcion va a recibir dos parametros el componente que queremos cargar y la etiqueta

//ahora vamos a cargar el componente principal del proyecto y se hace en el archivo App.js (los componentes van con mayuscular en el comienzo)
