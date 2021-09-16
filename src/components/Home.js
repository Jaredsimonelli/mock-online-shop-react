import React from "react";
import { getIcon } from "../helpers/getIcon";
import "jquery/src/jquery";

function Home() {
  return (
    <div>
      <h1 className="text-center mt-3">MOCK SHOP</h1>
      <h5 className="text-center mt-3">Welcome to the mock react shop!</h5>

      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={getIcon("tshirt")}
              className="d-block carousel-img white"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={getIcon("watch")}
              className="d-block carousel-img white"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={getIcon("indianajones")}
              className="d-block carousel-img white"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
