import React from "react";

const CardComponent2 = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">
            <span>Registro</span>
            <span id="exclamacion">!</span>
          </h3>
          <div id="textosubtitulo" class="form-text">
            Registrarte te permite realizar reservas, pagar, ceder la reserva a
            otro, y revisar el código QR de la reserva.
          </div>

          <div class="mb-3">
            <div class="row">
              <div class="col">
                <label for="Name" class="form-label">
                  Nombre <abbr aria-label="required">*</abbr>
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="First name"
                />
              </div>
              <div class="col">
                <label for="LastName" class="form-label">
                  Apellido <abbr aria-label="required">*</abbr>
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="Name" class="form-label">
              Correo <abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              class="form-control"
              id="correo"
              aria-describedby="emailHelp"
              required
            />
            <div class="mb-3">
              <label for="LastName" class="form-label">
                Rut <abbr aria-label="required">*</abbr>
              </label>
              <input type="text" class="form-control" id="Apellido" />
            </div>
            <div class="mb-3">
              <label for="contraseña" class="form-label">
                Contraseña <abbr aria-label="required">*</abbr>
              </label>
              <input type="password" class="form-control" id="pass" required />
            </div>
            <br />
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button">
                Registrar
              </button>
              <div class="form-text text-center">
                ¿Ya tienes cuenta?<a href="inicioSesion.html">Inicia sesión</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent2;
