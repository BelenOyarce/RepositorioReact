import React, { useCallback } from "react";
import {
  AutoFormComponent,
  AutoTableComponent,
  BotonComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const AutoPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  const handleOnClick4 = useCallback(() =>
    navigate("/BuscarAuto", {}, [navigate])
  );
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <AutoFormComponent />
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <BotonComponent infoBoton={"Ir a Home"} handleOnClick={handleOnClick} />
      </div>
      <div class="container d-flex content-flex end">
        <BotonComponent
          infoBoton={"Ir a Buscar Autos"}
          handleOnClick={handleOnClick4}
        />
        <Switch {...label} defaultChecked color="default" />
        <GreenSwitch {...label} defaultChecked />
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <AutoTableComponent />
        </div>
      </div>
    </div>
  );
};

export default AutoPage;
