import React from 'react';
import reactImage from '../assets/react-core-concepts.png';
const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
    const randomIndex = getRandomInt(2);
    console.log("Random Index:", randomIndex);
    console.log("Description:", reactDescription[randomIndex]);
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[randomIndex]} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }