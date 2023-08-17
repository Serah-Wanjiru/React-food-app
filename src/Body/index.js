import React from "react"
import './style.css'
import hellenImage from '../images/hellen.jpg';
import {BiBriefcase } from "react-icons/bi";
import yuiconImg from '../images/yuicon.png';
import sandwitchImg from '../images/gsandwitch.png';
import {BiNotification} from "react-icons/bi";
import burgerImg from '../images/Burger.png';
import pizzaImg from '../images/Pizza.png';
import chipsImg from '../images/Chips.png';
import {BiChevronRight} from "react-icons/bi";


function Body() {
  return (
    <div className="main">
    <h3 className="h3">All fast food is</h3>
    <h3 className="h3">Available at foodle</h3>
    <img  className="hellen" src={hellenImage} alt="hellen"/>
    <p className="p">We Are Just A Click Away When You</p>
    <p className="p">Crave For Fast Delicious Food</p>

    <button className="btn2">< BiBriefcase/> Buy Now</button>
    <img className="icon" src={yuiconImg} alt="icon"/>
    <h3 className="order">How to order</h3>
    <img className="sandwitch" src={sandwitchImg} alt="sandwitch"/>

   <div className="deliveries">
   <div>
   <BiNotification/>
   <h2>Fast Delivery</h2>
   <p>The food will Be Delivered To</p>
   <p>Your Home Within 1-2 Hours Of</p>
   <p>Your Ordering</p>


   </div>
   <div>
   <BiNotification/>
   <h2>Fresh Food</h2>
   <p>Your Food Will Be Delivered</p>
   <p>100% Fresh To Your Home We</p>
   <p>Do Not Deliver Stale Food</p>


   </div>
   <div>
   <BiNotification/>
   <h2>Free Delivery</h2>
   <p>Your Food Delivery Is</p>
   <p>Absolutely Free No Cost</p>
   <p>Just Order And Enjoy</p>


   </div>
   </div>
   <h3 className="category">Best <span className="span">Delivered</span> </h3>
   <h3 className="category">Categories </h3>
   <p className="paragraph">Here Are Some Of Our Best Distributed</p>
   <p className="paragraph">Categories.If You Want You Can Order</p>
   <p className="paragraph">From Here</p>
   <div className="categ">
   <div>
   <img className="burger" src={burgerImg } alt="burger"/>
   <h2>Chicken Burger</h2>
   <p className="p1">Orer Now<BiChevronRight/></p>

   </div>
   <div>
   <img className="pizza" src={pizzaImg } alt="pizza"/>
   <h2>Chicken Pizza</h2>
   <p className="p1">Orer Now<BiChevronRight/></p>

   </div>
   <div>
   <img className="chips" src={chipsImg} alt="chips"/>
   <h2>French Fries</h2>
   <p className="p1">Orer Now <BiChevronRight/></p>

   </div>
   </div>

   <h3 className="s">Our <span className="span">Regular</span> Menu</h3>
   <p className="p2">These Are Our Regular Menus.You Can</p>
   <p className="p2">Order Anything You Like</p>
   <button className="btn3">See All</button>
    
      
    </div>
  )
}

export default Body
