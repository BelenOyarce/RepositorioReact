import React from "react";
import "./styles.css";

const TicketComponent = () => {
  return (
    <div class="card">
      <div id="styleCard3">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">
            Pago Exitoso <span id="exclamacion">!</span>
          </h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
