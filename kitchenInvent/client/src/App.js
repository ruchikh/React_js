import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home.js';
import EditItem from './components/EditItem'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        	<Switch>
        		<Route exact path='/' component={Home}/>
            <Route path='/items/:item_id/edit' component={EditItem}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
        	</Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
