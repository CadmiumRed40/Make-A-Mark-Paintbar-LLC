import React from 'react'
//import router from 'react-router-dom'
import './NavigationBar.css'

function NavgationBar() {
  return (
    <div id="body">
      <nav>
      <span id="callUs">Call us:(888)888-8888</span>
        <ul>
            <li><a>Home</a></li>
            <li><a>Event Calendar</a></li>
            <li><a>Private Party</a></li>
            <li><a>Gallery</a></li> 
            <li><a>Contact Us</a></li>
        </ul>
        </nav>
    </div>
  )
}

export default NavgationBar