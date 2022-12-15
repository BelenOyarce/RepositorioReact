import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonComponent from "../components/Boton";
import UserFormComponent from "../components/UserForm";
import UserTableComponent from "../components/UserTable";

const usuario1 = [
  {
    id: 1,
    nombre: "Joseph",
    apellido: "Josephhhh",
    correo: "jo.jo@gmail.com",
  },
  {
    id: 2,
    nombre: "Josuke",
    apellido: "Josukeeeeeee",
    correo: "jojo@gmail.com",
  },
];

const UsuarioPage = () => {
  const navigate = useNavigate();
  const handleOnClick2 = useCallback(() => navigate("/Auto", {}, [navigate]));
  //en este momento state vale lo mismo que usuario 1
  //la funcion por dentro genera una funcion seteadora que te va a permitir cambiar los datos de usuario 1 sin afectarlo directamente (useState)
  const [user, setUser] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const userDelete = (nombreUsuario) => {
    const changeUser = user.filter(
      (usuario) => usuario.nombre != nombreUsuario
    );
    setUser(changeUser);
  };

  const userAdd = (usuario) => {
    const addUsuario = [
      //mantenme los datos que tengo en user y agregame lo que yo te entrego aqui (usuario)
      ...user,
      usuario,
    ];
    setUser(addUsuario);
  };

  const userEdit = (usuarioEditado) => {
    const editUser = user.map((usuario) =>
      usuario.nombre === usuarioEditado.nombre ? usuarioEditado : usuario
    );

    setUser(editUser);
  };

  // el momento de ocupar la funcion setState, yo le vou a cambiar los datos de manera TEMPORAL
  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <UserFormComponent
            userAdd={userAdd}
            usuarioEditado={usuarioEditado}
            setUsuarioEditado={setUsuarioEditado}
            userEdit={userEdit}
          />
        </div>
      </div>
      <BotonComponent infoBoton={"Ir a Autos"} handleOnClick={handleOnClick2} />
      <hr />
      <div class="row">
        <div class="col">
          <UserTableComponent
            usuarios={user}
            deleteUser={userDelete}
            setUsuarioEditado={setUsuarioEditado}
          />
        </div>
      </div>
    </div>
  );
};

export default UsuarioPage;
