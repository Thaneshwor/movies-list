import React, { Component } from 'react';

import './App.css';
import Navbar from './components/layout/header/Navbar';
import Footer from './components/layout/footer/Footer';
import Landing from './components/home/Landing';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div >
    )
  }
}
export default App;
