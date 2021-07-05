import React from 'react';
// import { route } from 'react-router-dom';
import Axios from 'axios';

const Friend = props => {
  const friend = props.friends.find(
    buddy => `${buddy.id}` === props.match.params.id
  );

  if (!props.friends.length || !friend) {
    return <h2>Loading Friends...</h2>;
  }

  const unFriend = event => {
    Axios.delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => {
        props.updateFriends(response.data);
        props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="friend-wrapper">
      <div className="cancel">
        <i className="far fa-trash-alt" onClick={unFriend} />{' '}
      </div>
      <div>
        <h2>Name: {friend.name}</h2>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
      </div>
    </div>
  );
};

export default Friend;
