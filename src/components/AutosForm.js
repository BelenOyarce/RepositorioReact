import React from "react";
import BotonComponent from "./Boton";

const AutoFormComponent = () => {
  return (
    <div className="container mt-3">
      <h3>Formulario auto</h3>
      <form>
        <div class="mb-3">
          <label for="marca" class="form label">
            Marca Auto
          </label>
          <input
            type="text"
            class="form-control"
            id="marca"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="modelo" class="form-label">
            Modelo
          </label>
          <input type="text" class="form-control" id="modelo" />
        </div>
        <div class="mb-3">
          <label for="color" class="form-label">
            Color
          </label>
          <input type="text" class="form-control" id="color" />
        </div>
        <div class="mb-3">
          <label for="año" class="form-label">
            Año
          </label>
          <input type="text" class="form-control" id="año" />
        </div>
        <div class="mb-3">
          <label for="precio" class="form-label">
            Precio
          </label>
          <input type="text" class="form-control" id="precio" />
        </div>
        <div>
          <br />
          <BotonComponent infoBoton={"Agregar auto"} />
          <br />
        </div>
      </form>
    </div>
  );
};

export default AutoFormComponent;
