import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CODE, WELCOME, CONTACT, PHOTOVID, ABOUT, NAVBAR } from './components'
// import WELCOME from './components/welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NAVBAR />
        <WELCOME />
        <ABOUT />
        <PHOTOVID />
        <CODE />
        <CONTACT />
      </div>
    );
  }
}

export default App;
