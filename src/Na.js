
import React from 'react';
import './notcovered.css';
import cross from './cross.png';

const Na = () => {
  return (
    <div className="na-page">
      <h1 className="na-title">This item is</h1>
      <img src={cross} alt="cross"/>
      <h1 className="na-title">NOT COVERED BY NIHB</h1>
      <p className="na-description">Consider scanning another product or speak to your pharmacist</p>
    </div>
  );
};

export default Na;
