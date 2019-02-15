import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<div>
      	<img src="" />
      	<button className="header-search">Search</button>
      	<ul className="nav-item">
      		<li>Ask</li>
      		<li>Ship</li>
      		<li>Makers</li>
      		<li>Jobs</li>
      		<li>Events</li>
      		<li>...</li>
      	</ul>
      	<button>LOG IN</button>
      	<button>SIGN UP</button>
      	</div>       
      </div>
    );
  }
}

export default Header;
