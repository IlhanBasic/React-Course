import React from 'react';
import coreImage from '../../assets/react-core-concepts.png';
import './CoreConcept.css';
export default function CoreConcept ({image,title,description}){
    return (
      <li>
        <img src={image}/>
        <h1>{title}</h1>
        <p>{description}</p>
      </li>
  
    )
  }