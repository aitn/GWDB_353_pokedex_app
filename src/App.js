import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Pokedex-App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-intro">
            Welcome to my FAN~foxtrot~tabulous pokedex APP
        </p>
      </div>
    );
  }
}

export default App;
