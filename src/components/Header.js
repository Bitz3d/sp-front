import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
      <div>
      <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/register">Register </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">Login </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}