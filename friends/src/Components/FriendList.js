import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';

const FriendList = props => {
  function routeToFriend(ev, friend) {
    ev.preventDefault();
    props.history.push(`/${friend.id}`);
  }

  return (
    <div className="FriendList">
      {props.friends.map(friend => (
        <div
          className="friendcard"
          key={friend.id}
          onClick={ev => routeToFriend(ev, friend)}
        >
          <h2>{friend.name}</h2>
          <p>Age:{friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
