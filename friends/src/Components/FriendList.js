import React from 'react';
import '../App.css'
// import { Link } from 'react-router-dom';

const FriendList = (props) => 
  // console.log('hello')
  (
    <div className="FriendList">
      {props.friends.map(friend => (
        <div className="friendcard" key={friend.id}>
          <h2>{friend.name}</h2>
          <p>Age:{friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );


export default FriendList;