import React, {Component} from "react";
import {Link} from "react-router-dom";
// import index from '../index.scss';

class Header extends Component {
  

  render(){
    return (
      <div className="">
        <div className="header">
          <Link to='/'><h2>Blogger</h2></Link>
        </div>
      </div>
    )
  }
}



export default Header;