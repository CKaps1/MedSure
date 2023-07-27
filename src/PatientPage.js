import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
//link to routing on homepage

const buttonStyle = {
  fontSize: '1rem',
};


const PatientPage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Do you have one of the following?</h1>
      <div className="user-buttons">
          <Link to="/Din" className="user-button" style={buttonStyle}>
            Indian Act <br></br> Registration Number
          </Link>
          <br></br>
          <Link to="/Din" className="user-button" style={buttonStyle}>
            First Nations Client ID Number <br></br> (B-Number)
          </Link>
          <Link to="/Din" className="user-button" style={buttonStyle}>
          Intuit Client ID Number <br></br> (N-Number)
          </Link>
          <Link to="/Na" className="user-button" style={buttonStyle}>
          Govt. of NWT Health <br></br> Plan Number
          </Link>
          <Link to="/Na" className="user-button" style={buttonStyle}>
          Govt. of Nunavut Health <br></br> Plan Number
          </Link>
        </div>
      </div>
  );
};

export default PatientPage;
