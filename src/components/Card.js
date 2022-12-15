import React from "react";
import "./styles.css";

const CardComponent = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            <span>Inicio Sesión</span>
            <span id="exclamacion">!</span>
          </h4>
          <div id="textosubtitulo" class="text">
            Inicia sesión para reservar y ver tus reservas
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
            />

            <div class="mb-3">
              <label for="contraseña" class="form-label">
                Contraseña
              </label>
              <input type="password" class="form-control" id="contraseña" />
            </div>
            <div id="olvidocontraseña" class="form-text text-center">
              <a href="olvidocontraseña">¿Olvidaste tu contraseña?</a>
            </div>
            <br />
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button">
                Iniciar Sesión
              </button>
              <div class="form-text text-center">
                ¿No te has registrado?{" "}
                <a href="registroUsuario.html">Registrate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
