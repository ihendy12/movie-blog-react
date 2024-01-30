import React from 'react';


function NavBar (){
  return (
  <div className='hero'>
    <div className='NavBar'>
      <ul>
        <a>Home</a>
        <a>Movies</a>
        <a>Rankings</a>
        <a>About</a>
        <a>Contact</a>   
      </ul>
    </div>
    <div className='rightButtons'>
      <button className='login'>Login</button>
      <button className='register'>Register</button>
    </div>
  </div>
  );
};

export default NavBar;