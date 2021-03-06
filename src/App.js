import React, { Component } from 'react';
import Login from './components/login/Login.js';
import Register from './components/register/Register';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Logout from './components/logout/Logout.js'
import FileUplaod from './components/fileUpload/FileUplaod'
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import StoreProvider from './store/Store'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SpotTabs from './components/spotTabs/SpotTabs'
import { RandomWalker } from './components/nature-of-code/random-walker/RandomWalker.js';
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";

const storeContext = React.createContext();

class App extends Component {
  render() {
    return (
      <StoreProvider storeContext={storeContext}>
        <ModalProvider>
          <I18nextProvider i18n={i18n}>
            <div className="main-content">
              <Router >
                <Header></Header>
                <Route exact path='/' component={Home} />
                <Route exact path='/upload' component={FileUplaod} />
                <Route exact path='/spot-table' component={SpotTabs} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/logout' component={Logout} />
                <Route path='/random-walker' component={RandomWalker} />
              </Router>
            </div>
          </I18nextProvider>
        </ModalProvider>
      </StoreProvider>
    );
  }
}
export default App;
