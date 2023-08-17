import React from "react"
import './style.css'
function NavBar() {
  return (
    <div className="navbar">
      <h3 className="logo">foodie</h3>
      
    <ul className="list">
      <li>Home</li>
      <li>Offer</li>
      <li>Service</li>
      <li>Menu</li>
      <li>About us</li>
    </ul>
<ul className="list1">
  <li>Login</li>
  <button className="btn">sign up</button>
</ul>
    </div>

  )
}

export default NavBar

