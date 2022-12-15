import React, { useCallback } from "react";
import { AutoNuevo, BotonComponent } from "../components";
import { useNavigate } from "react-router-dom";

const BuscarAutoPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));

  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <AutoNuevo />
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <BotonComponent infoBoton={"Ir a Home"} handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default BuscarAutoPage;
