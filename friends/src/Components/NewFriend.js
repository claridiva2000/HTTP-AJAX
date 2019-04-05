import React, { Component } from 'react';
import Axios from 'axios';
import '../App.css';

export default class NewFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      friend: { ...prevState.friend, [ev.target.name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    Axios.post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        this.props.updateFriends(response.data);
        this.props.history.push('/friendlist');
      })
      .catch(err => console.log(err));
  };

  putHandler = event => {
    event.preventDefault();
    Axios.put('http://localhost:5000/friends/${id}', this.state.friend);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="inputform"
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.changeHandler}
            value={this.state.friend.name}
          />
          <input
            placeholder="Age"
            type="text"
            name="age"
            onChange={this.changeHandler}
            value={this.state.friend.age}
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={this.changeHandler}
            value={this.state.friend.email}
          />
          <button type="submit">Add a Friend</button>
        </form>
      </div>
    );
  }
}
