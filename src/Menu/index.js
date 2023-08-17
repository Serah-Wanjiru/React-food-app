import React from 'react';
import './style.css';
import chickenBImg from '../images/chickenBurger.png';
import pizzaImg from '../images/chickenPizza.png';
import fryBImg from '../images/chickenFry.png';
import grillBImg from '../images/grillSundwhich.png';
import tacoImg from '../images/taco.png';
import noddleImg from '../images/noodle.png';

function Menu() {
  const sections = [
    {
      imageSrc: chickenBImg,
      title: 'Chicken Burger',
      description: 'Description for section 1',
      price: 3.50,
    },
    {
      imageSrc: pizzaImg,
      title: 'Chicken Pizza',
      description: 'Description for section 2',
      price: 4.20,
    },
    {
      imageSrc: fryBImg,
      title: 'Chicken Fry',
      description: 'Description for section 3',
      price: 5.00,
    },
    {
      imageSrc: grillBImg,
      title: 'Grill Sandwich',
      description: 'Description for section 4',
      price: 4.80,
    },
    {
      imageSrc: tacoImg,
      title: 'Taco',
      description: 'Description for section 5',
      price: 3.63,
    },
    {
      imageSrc: noddleImg,
      title: 'Noodle',
      description: 'Description for section 6',
      price: 6.50,
    },
  ];

  const firstSet = sections.slice(0, 3);
  const secondSet = sections.slice(3);

  return (
    <div className='container'>
      <Section sections={firstSet} />
      <Section sections={secondSet} />
    </div>
  );
}

function Section({ sections }) {
  return (
    <div className='section'>
      {sections.map((section, index) => (
        <div key={index} className='section-item'>
          <img src={section.imageSrc} alt='Section Image' className='image' />
          <h2 className='title'>{section.title}</h2>
          <div className='stars'>*****</div>
          <p className='description'>{section.description}</p>
          <div className='price'>${section.price}</div>
          <button className='buy-button'>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;