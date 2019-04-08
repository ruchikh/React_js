import React, { Component } from 'react';
import './App.css';
import SearchInput from "./components/SearchInput";
import filterEmoji from './components/filterEmoji';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterEmoji: filterEmoji("", 20)
    }
  }

  handleSearchChange = e => {
    this.state({
      filterEmoji: filterEmoji(e.target.value, 20)
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Emoji Search</h1>
        </header>

        <SearchInput textChange={this.handleSearchChange}/>
      </div>
    );
  }
}

export default App;
