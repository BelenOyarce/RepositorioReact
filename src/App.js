//el componente es un simil a una funcion, la diferencia es que en JAVA nos devuelve un objeto y aqui nos devuelve una VISTA.
//El App.js es el componente nucleo

import React from "react"; //este import esta en todos los archivos
//nuestro componente debe llamarse igual que el nombre del archivo, en este caso App, es una buena practica
//el componente debe estar dentro de un div, ya que lo que muestra es una pagina completa y no solo el componente

//se hace esto para poder importarlo en el index.js

import { BrowserRouter, Routes, Route } from "react-router-dom"; //permitira la navegacion de la pagina web
import { HomePage, AutoPage, BuscarAutoPage, UsuarioPage } from "./pages";
import InicioSesionPage from "./pages/InicioSesion";
import RegistroPage from "./pages/Registro";
import TicketPage from "./pages/Ticket";

const App = () => {
  return (
    //desde el navegador
    <BrowserRouter>
      {/* Vamos a tener distintas rutas */}
      <Routes>
        {/* Expecificamos cada ruta */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Auto" element={<AutoPage />} />
        <Route path="/BuscarAuto" element={<BuscarAutoPage />} />
        <Route path="/Usuario" element={<UsuarioPage />} />
        <Route path="/InicioSesion" element={<InicioSesionPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route path="/PagoExitoso" element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
