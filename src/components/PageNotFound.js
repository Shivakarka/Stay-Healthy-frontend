import React from "react";
import { Link } from "react-router-dom";
import NotFound from "./not-found.svg";

function PageNotFound() {
  return (
    <>
      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <h1>Page Not Found. Error: 404</h1>
          <p>
            The page that you are looking for cannot be found. Please click the
            below button to get back to Home
          </p>
          <Link to="/" className="anchor mt-3">
            <button className="primary-button">Back to Home</button>
          </Link>
        </div>
        <img className="logos" src={NotFound} alt="404-error"></img>
      </div>
    </>
  );
}

export default PageNotFound;
