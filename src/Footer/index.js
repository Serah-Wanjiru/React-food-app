import React from "react"
import './style.css'
import fooddsImg from '../images/foodds.png';
import foodImg from '../images/food.png';
import mediaImg from '../images/media.png';
function Footer() {
  return (
    <div>
           <div className="img">
           <img className="food" src={fooddsImg} alt="foodds"/>
           <img className="foods" src={foodImg} alt="food"/>
 </div>
 
 <div className="footer"> 
    <ul>
        <h3 className="title">Foodish</h3>
        <p>continue foodish 2023 all right reserved</p>
        <h3 className="title">Folow us on</h3>
        <img className="media" src={mediaImg} alt="media"/>
    </ul>
    <ul>
        <h3 className="title">Menu</h3>
        <li>Home</li>
        <li>offer</li>
        <li>Service</li>     
        <li>About us</li>
    </ul>
    <ul>
        <h3 className="title">Information</h3>
        <li>Menu</li>
        <li>Quality</li>
        <li>Make A Choice</li>     
        <li>Salad With Vegetables</li>
        <li>First Delivery</li>     
        <li>Subscribe</li>
    </ul>
    <ul>
        <h3 className="title">Contacts</h3>
        <li>+123 456 789</li>
        <li>Explore</li>
        <li>info@foodish.com</li>     
        <li>1245,New York,USA</li>
    </ul>
 </div>
 
 
    </div>
  )
}

export default Footer
