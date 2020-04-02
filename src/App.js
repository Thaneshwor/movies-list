import React, { Component } from 'react';

import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div >
    )
  }
}
export default App;
