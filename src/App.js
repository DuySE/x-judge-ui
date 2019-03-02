import React, { Component } from 'react';
import graduation from './graduation.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={graduation} className="App-logo" alt="logo" />
          <p>
            Are you willing to joing us, Loli?            
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
