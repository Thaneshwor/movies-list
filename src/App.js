import React, { Component } from 'react';

import './App.css';
import Navbar from './components/layout/header/Navbar';
import Footer from './components/layout/footer/Footer';
import Landing from './components/home/Landing';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Landing />
        <Footer />
      </Provider >
    )
  }
}
export default App;
