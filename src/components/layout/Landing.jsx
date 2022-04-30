import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="center-align">
          <p className="flow-text grey-text text-darken-1">
            Sign Up or Log In to edit Students Data
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/register" className="btn btn-primary me-2">
              Register
            </Link>
            <Link to="/login" className="btn btn-outline-primary">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
