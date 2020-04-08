import React, { Component } from 'react';
import Login from './components/login/Login.js';
import Register from './components/register/Register';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Logout from './components/logout/Logout.js'
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import StoreProvider from './store/Store'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const storeContext = React.createContext();

class App extends Component {
  render() {
    return (
      <StoreProvider storeContext={storeContext}>
        <I18nextProvider i18n={i18n}>
          <div className="main-content">
            <Router >
              <Header></Header>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/logout' component={Logout} />
            </Router>
          </div>
        </I18nextProvider>
      </StoreProvider>
    );
  }
}
export default App;
