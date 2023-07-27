
import React from 'react';
import './good.css';
import check from './check.png';

const Na = () => {
  return (
    <div className="good-page">
      <h1 className="good-title">This item is</h1>
      <img src={check} alt="check"/>
      <h1 className="good-title">COVERED BY NIHB!</h1>
      <p className="good-description">Speak to your pharmacist for a written recommendation</p>
    </div>
  );
};

export default Na;
