import React from "react";
import { getIcon } from "../helpers/getIcon";
import { useSelector, useDispatch } from "react-redux";
import { updateCarouselIndex } from "../redux/actions";

function Home() {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();

  const carouselIndex = store.carouselIndex;
  let activeIndex = carouselIndex;

  const next = () => {
    if (activeIndex + 1 <= 2) {
      activeIndex++;
    } else {
      activeIndex = 0;
    }
    dispatch(updateCarouselIndex(activeIndex));
  };

  const prev = () => {
    if (activeIndex - 1 !== -1) {
      activeIndex--;
    } else {
      activeIndex = 2;
    }
    dispatch(updateCarouselIndex(activeIndex));
  };

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
          <div
            className={`indicator mx-1 ${
              carouselIndex === 0 ? "indicator-active" : ""
            }`}
            id="indicator0"
          ></div>
          <div
            className={`indicator mx-1 ${
              carouselIndex === 1 ? "indicator-active" : ""
            }`}
            id="indicator1"
          ></div>
          <div
            className={`indicator mx-1 ${
              carouselIndex === 2 ? "indicator-active" : ""
            }`}
            id="indicator2"
          ></div>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={getIcon("tshirt")}
              className="d-block carousel-img white mt-3"
              alt="..."
            ></img>
            <div class="mt-3 purp-text text-center">SHWIFTY SHIRTS * WOW *</div>
          </div>
          <div className="carousel-item">
            <img
              src={getIcon("watch")}
              className="d-block carousel-img white mt-3"
              alt="..."
            ></img>
            <div class="mt-3 purp-text text-center">WACKY WATCHES * OHHH *</div>
          </div>
          <div className="carousel-item">
            <img
              src={getIcon("indianajones")}
              className="d-block carousel-img white mt-3"
              alt="..."
            ></img>
            <div class="mt-3 purp-text text-center">HATS...</div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          id="scroll_left"
          onClick={() => prev()}
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
          id="scroll_right"
          onClick={() => next()}
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
