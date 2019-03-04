import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './components/UserDetails';
import User from './components/User'
import { Hooks, UserInput } from './components/Hooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>GitHub User List</h1>
        </header>
        <UserInput />
      </div>
    );
  }
}

export default App;
