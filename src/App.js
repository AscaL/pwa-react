import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCardContainer from './containers/UserCardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <UserCardContainer />
        <div id="content-area"> CA </div>
      </div>
    );
  }
}

export default App;
