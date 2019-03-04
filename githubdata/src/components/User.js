import React, { Component } from 'react';

class User extends Component {
  

  render() {
  const user = this.props.user;
  console.log(user)
    return (
      <div className="user">
      {
        (user) ? 
        <div>
          <p>Login: {user.login}</p>
          <p>Following: {user.following}</p>
          <p>Followers: {user.followers}</p>
        </div> : <div></div>
      }
       

      </div>
      
    );
  }
}

export default User;
