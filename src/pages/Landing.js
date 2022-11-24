import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./doc4.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="navbar-brand me-2">
            <h2 className="text-primary"> STAY HEALTHY</h2>
          </div>

          <div class="d-flex align-items-center">
            <button
              onClick={() => {
                navigate("/login");
              }}
              type="button"
              class="btn btn-link px-3 me-2 text-decoration-none"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
              type="button"
              class="btn btn-primary me-3"
            >
              Sign up for free
            </button>
          </div>
        </div>
      </nav>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={Logo}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Find your Doctor and make an appointment
            </h1>
            <p class="lead">
              Select preferred doctor and time slot to book appointment.{" "}
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        {" "}
        <h1 style={{ maxWidth: "300px" }}>Easy Steps to Book: </h1>
      </div>

      <div class="container mt-5 d-flex flex-column flex-sm-row">
        <div class="card mb-3 " style={{ maxWidth: "400px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvcveHjjyK1d3v5sNUNfqaz-xAbJLsFyVyQ&usqp=CAU"
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Step One</h5>
                <p class="card-text">
                  Select the required doctor from the list.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style={{ maxWidth: "400px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="data:image/png;base64,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"
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Step Two</h5>
                <p class="card-text">
                  Select the appointment date and time as per the doctor's
                  availability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style={{ maxWidth: "400px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDpZWBBc8Z91IygX-0ymFapHYTnOyG1AVMA&usqp=CAU"
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start mt-4"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Step Three</h5>
                <p class="card-text">
                  Recheck your booking time and click on Book Now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
