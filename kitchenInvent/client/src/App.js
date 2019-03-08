import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home.js';
import EditItem from './components/EditItem'
// import SingUp from './components/SingUp'
// import SingIn from './components/SingIn'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        	<Switch>
        		<Route exact path='/' component={Home}/>
            <Route path='/items/:item_id/edit' component={EditItem}/>
        	</Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
