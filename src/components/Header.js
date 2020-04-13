import React, { useEffect } from "react";
import '../header.css';
import { Link } from 'react-router-dom'
import AuthService from '../service/AuthService';
import { storeContext } from '../store/Store.js'
import i18n from '../i18n';



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
            <Link className="nav-link" to="/">{i18n.t('home')} <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/upload">{i18n.t('fileUplaod')} <span className="sr-only">(current)</span></Link>
          </li>
        </ul> : null}
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {loggedIn ? null : <Link className="nav-link" to="/register">{i18n.t('register')} </Link>}
          </li>
          <li className="nav-item active">
            {loggedIn ? (<Link className="nav-link" to="/logout">{i18n.t('logout')} </Link>) : (<Link className="nav-link" to="/login">{i18n.t('login')} </Link>)}
          </li>
        </ul>
      </div>
    </nav>
  )
}