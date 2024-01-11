import React from "react";
import {Link} from 'react-router-dom';
export default function Header(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-body-tertiary`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`form-check d-flex form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } `}
          >
            <img
              src={"light-theme-icon.png"}
              alt="Theme"
              width="30px"
              height="30px"
              onClick={props.toggleMode}
              style={{
                filter: props.mode === "light" ? "invert(0%)" : "invert(100%)",
                cursor: "pointer"
              }}
              
              className="me-3"
            />

            {/* <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable DarkMode</label> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
