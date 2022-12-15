import React from "react";

const AutoTableComponent = () => {
  return (
    <div className="container mt-3">
      <h2>Tabla Autos</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Marca Auto</th>
            <th scope="col">Modelo</th>
            <th scope="col">Color</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Suzuki</td>
            <td>Spresso</td>
            <td>naranjo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Audi</td>
            <td>C3</td>
            <td>Blanco</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Suzuki</td>
            <td>Swift</td>
            <td>azul</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AutoTableComponent;
