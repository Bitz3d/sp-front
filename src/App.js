import React, { Component } from 'react';
import Login from './components/login/Login.js';
import Register from './components/register/Register';
import Home from './components/Home.js';
import Header from './components/Header.js';
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Body from './components/Body.js';


class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <div className="main-content">
           <Router >
           <Header></Header>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Router>
      </div>
      </I18nextProvider>
    );
  }
}
export default App;
