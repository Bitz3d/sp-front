import React, { useEffect } from "react";
import '../header.css';
import { Link } from 'react-router-dom'
import AuthService from '../service/AuthService';
import { storeContext } from '../store/Store.js'


export default function Header() {
  const [{ loggedIn }, { toggleLoggedIn }] = React.useContext(storeContext);

  useEffect(() => {
    const li = AuthService.checkUserLoggedIn()
    toggleLoggedIn(li)
  }, [loggedIn]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {loggedIn ? <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
        </ul> : null}
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {loggedIn ? null : <Link className="nav-link" to="/register">Register </Link>}
          </li>
          <li className="nav-item active">
            {loggedIn ? (<Link className="nav-link" to="/logout">Logout </Link>) : (<Link className="nav-link" to="/login">Login </Link>)}
          </li>
        </ul>
      </div>
    </nav>
  )
}