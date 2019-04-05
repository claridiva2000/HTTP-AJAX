import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Background = props => {
  return (
    <div>
      <div className="startbutton">
        <NavLink to="/friendlist"> Add a Friend!</NavLink>
      </div>
      <div className="background" />
    </div>
  );
};

export default Background;
