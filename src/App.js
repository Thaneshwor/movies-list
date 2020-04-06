import React, { Component } from 'react';

import './App.css';
import Navbar from './components/layout/header/Navbar';
import Footer from './components/layout/footer/Footer';
import Landing from './components/home/Landing';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Landing />
            <Footer />
          </div>
        </Router>
      </Provider >
    )
  }
}
export default App;
