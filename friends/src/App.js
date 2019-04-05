import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import FriendList from './Components/FriendList';
import NewFriend from './Components/NewFriend';
import Friend from './Components/Friend';
import Background from './Components/Background'


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

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
          <div className="left">
            <h1><NavLink to='/'>FriendsList</NavLink></h1>
            <form>
              <input placeholder="search" />
              <button className="searchbtn">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="navlinks">
            <p>Welcome, Jasmine!</p> <NavLink to='/'><p>Home</p></NavLink>
            <NavLink to='/friendlist'><i className="fas fa-user-friends" /></NavLink>
            <i className="fas fa-bell" />
          </div>
        </nav>

     {/* <Background/> */}
      <Route exact path='/' component={Background}/>

        <Route
          path="/friendlist"
          render={props => (
            <NewFriend {...props} updateFriends={this.updateFriends} />
          )}
        />


        <Route
          // exact
          path="/friendlist"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
