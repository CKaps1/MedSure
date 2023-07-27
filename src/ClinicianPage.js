import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

const buttonStyle = {
  fontSize: '1rem',
};

const ClinicianPage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Does your patient have one of the following?</h1>
      <div className="user-buttons">
      <button className="user-button" style = {buttonStyle}>Indian Act Registration Number</button>
        <button className="user-button" style = {buttonStyle}>First Nations Client ID Number <br></br>(B-Number) </button>
        <button className="user-button" style = {buttonStyle}>Intuit Client ID Number <br></br>(N-Number)</button>
        <button className="user-button" style = {buttonStyle}>Govt. of NWT Health <br></br>Plan Number</button>
        <button className="user-button" style = {buttonStyle}>Govt. of Nunavut Health <br></br>Plan Number</button>
        <button className="user-button" style = {buttonStyle}>I have a child less than 24 months <br></br> and I have status</button>
      </div>
    </div>
  );
};

export default ClinicianPage;
