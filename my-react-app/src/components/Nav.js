import React from 'react';
import { Link } from 'react-router-dom';


var navStyle= {
  backgroundColor: "black",
}

function Nav() {
  return(
    <ul class="nav justify-content-center" style={navStyle}>
      <li class="nav-item">
        <Link class="nav-link active" to='/'>Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/portfolio'>Portfolio</Link>
      </li>
    </ul>
  )
}


export default Nav;