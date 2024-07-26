import React from "react";

export default function Navbar({setCategory}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">News XOX </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="mx-2 btn btn-danger text-light" >
                <div
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="mx-2 btn btn-danger">
                <div
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </div>
              </li>
              <li className="mx-2 btn btn-danger">
                <div
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>
              <li className="mx-2 btn btn-danger">
                <div
                  onClick={() => setCategory("health")}
                >
                  Health
                </div>
              </li>

              <li className="mx-2 btn btn-danger">
                <div
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>
              <li className="mx-2 btn btn-danger">
                <div
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
