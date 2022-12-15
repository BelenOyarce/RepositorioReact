import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BotonComponent from "../components/Boton";

const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  const handleOnClick2 = useCallback(() => navigate("/Auto", {}, [navigate]));
  const handleOnClick3 = useCallback(() =>
    navigate("/Usuario", {}, [navigate])
  );
  const handleOnClick4 = useCallback(() =>
    navigate("/BuscarAuto", {}, [navigate])
  );
  const handleOnClick5 = useCallback(() =>
    navigate("/InicioSesion", {}, [navigate])
  );
  const handleOnClick6 = useCallback(() =>
    navigate("/Registro", {}, [navigate])
  );
  const handleOnClick7 = useCallback(() =>
    navigate("/PagoExitoso", {}, [navigate])
  );
  return (
    <div>
      <BotonComponent infoBoton={"Ir a Home"} handleOnClick={handleOnClick} />
      <BotonComponent infoBoton={"Ir a Auto"} handleOnClick={handleOnClick2} />
      <BotonComponent
        infoBoton={"Ir a Usuario"}
        handleOnClick={handleOnClick3}
      />
      <BotonComponent
        infoBoton={"Ir a Buscar Autos"}
        handleOnClick={handleOnClick4}
      />
      <BotonComponent
        infoBoton={"Ir a Iniciar Sesión"}
        handleOnClick={handleOnClick5}
      />
      <BotonComponent
        infoBoton={"Ir a Registro"}
        handleOnClick={handleOnClick6}
      />
      <BotonComponent
        infoBoton={"Ir a Pago Exitoso"}
        handleOnClick={handleOnClick7}
      />
    </div>
  );
};

export default HomePage;
