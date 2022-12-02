import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./doc4.jpg";
import Logo2 from "./doc5.jpg";

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
            <button
              onClick={() => {
                navigate("/login");
              }}
              type="button"
              class="btn btn-primary mt-3"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        {" "}
        <h1 style={{ maxWidth: "300px" }}>Easy Steps to Book: </h1>
      </div>

      <div class="container mt-5 d-flex flex-column flex-sm-row justify-content-center">
        <div class="card mb-3 " style={{ maxWidth: "400px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://previews.123rf.com/images/indomercy/indomercy1501/indomercy150100019/35500150-doctor-cartoon-illustration.jpg"
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
                src="https://static.vecteezy.com/system/resources/thumbnails/002/621/922/small/alarm-clock-time-vintage-cartoon-flat-icon-free-vector.jpg"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvIPy9LI_NYCj-MkVKvqLvtJnBQf55Qkosw&usqp=CAU"
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start mt-2"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Step Three</h5>
                <p class="card-text">
                  Recheck your booking time. Click on Book Now and pay the Fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container col-xxl-8 px-4 py-5 mt-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              We always Ensure Best Doctors for you.
            </h1>
            <ul class="list-group list-group-light lead">
              <li
                class="list-group-item px-3 border-0 rounded-3 list-group-item-warning mb-2 mt-4"
                aria-current="true"
              >
                Top Specialist Doctors
              </li>
              <li class="list-group-item px-3 border-0 rounded-3 list-group-item-warning mb-2 mt-2">
                State of the Art Treatment
              </li>
              <li class="list-group-item px-3 border-0 rounded-3 list-group-item-warning mb-2 mt-2">
                Enrollment is quick and easy
              </li>
            </ul>
          </div>
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={Logo2}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
          &#169; Stay Healthy
        </a>
      </div>
    </div>
  );
};

export default Landing;
