import React, { useState, useEffect } from "react";
import BotonComponent from "./Boton";

const initialUsuario = {
  nombre: "",
  apellido: "",
  correo: "",
};

const UserFormComponent = ({
  userAdd,
  usuarioEditado,
  setUsuarioEditado,
  userEdit,
}) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, apellido, correo } = usuario;
  //el hook useEffect siempre esta pendiente de si la variable de si la variable que tiene dentro de
  //sus corchetes cambia el debera hacer todo lo que tiene en su funcion dentro
  //CONSIDERACION es que useEffect siempre corre al menos 1 vez cuando la página carga por primera vez
  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        nombre: "",
        apellido: "",
        correo: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nosotros escribimos algo en algun input de nuestra pagina
    const changedFormValue = {
      ...usuario,
      //va a traer los datos que tiene usuario de los input que no he tocado pero va a actualizar el atributo que cambie por un nuevo valor
      [e.target.name]: e.target.value,
    };
    //finalmente los cambios deberan verse reflejdos en nuestro hook
    setUsuario(changedFormValue);
  };

  return (
    <div className="container mt-3">
      <form>
        {/*hacemos que el mensaje del formulario sea dinamico
        segun si queremos editar o ingresar*/}
        {usuarioEditado !== null ? (
          <h1>Editar Usuario</h1>
        ) : (
          <h1>Ingrese Usuario</h1>
        )}
        <div class="mb-3">
          <label for="nombre" class="form label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            aria-describedby="emailHelp"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="apellido"
            aria-describedby="emailHelp"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Correo
          </label>
          <input
            type="email"
            class="form-control"
            id="correo"
            aria-describedby="emailHelp"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <br />
        <div>
          {usuarioEditado !== null ? (
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => userEdit(usuario)}
            >
              Editar usuario
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => userAdd(usuario)}
            >
              Ingresar usuario
            </button>
          )}

          {usuarioEditado !== null ? (
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => setUsuarioEditado(null)}
            >
              Cancelar
            </button>
          ) : (
            <></>
          )}
        </div>
        <br />
      </form>
    </div>
  );
};

export default UserFormComponent;
