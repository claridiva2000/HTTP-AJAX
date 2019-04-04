import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import FriendList from './Components/FriendList';
import NewFriend from './Components/NewFriend';
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  //initiate function to check if friends has data in it.

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <nav>
          <div className='left'><h1>FriendsList</h1>
          <form><input placeholder="search" /><button className='searchbtn'><i class="fas fa-search"></i></button></form>
          </div>
          <div className="navlinks">
            
            <p>Welcome, Jasmine!</p> <p>Home</p>
            <i class="fas fa-user-friends" />
            <i class="fas fa-bell" />
          </div>
        </nav>

        <Route path="/" component={NewFriend} />

        <Route
          exact
          path="/"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
