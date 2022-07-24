import React from "react";
import "./Testimonial.css";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
const Testimonial = () => {
  return (
    // <div className="test">
    //   <div class="card" style={{ width: "18rem" }}>
    //     <img src={avatar1} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <p class="card-text">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide bg-dark"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card" style={{ width: "18rem" }}>
              <img src={avatar1} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card" style={{ width: "18rem" }}>
              <img src={avatar2} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card" style={{ width: "18rem" }}>
              <img src={avatar3} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Testimonial;
