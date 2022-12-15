import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/Card";
import { BotonComponent } from "../components";

const InicioSesionPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <CardComponent />
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <BotonComponent infoBoton={"Ir a Home"} handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default InicioSesionPage;
