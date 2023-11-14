import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Menu.css';

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark menu fixed-top">
        <div className="container-fluid  justify-content-center text-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item mx-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  INICIO
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/carta" className="nav-link active">
                  CARTA
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/eventos" className="nav-link active">
                  EVENTOS
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/reservas" className="nav-link active">
                  RESERVAS
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/contactanos" className="nav-link active">
                  CONTACTANOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}


