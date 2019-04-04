import React from 'react';
import '../App.css';

export default function NewFriend() {
  return (
    <div>
      <form >
        <input className="inputform" type="text" placeholder='Name'/>
        <input type="text" placeholder='Age'/>
        <input type="email" placeholder='Email'/>
        <button>Add a Friend</button>
      </form>
    </div>
  )
}

