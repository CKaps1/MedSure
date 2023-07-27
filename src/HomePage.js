import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (

    <div className="home-page">
        <h1 className="home-page-title">Welcome to <br></br>MedSure</h1>
        <br>
        </br>
        <h4>ARE YOU A...</h4>
      <div className="user-buttons">
        <Link to="/ClinicianPage" className="user-button">
          Clinician
        </Link>
        <Link to="/PatientPage" className="user-button">
          Patient
        </Link>
      </div>
      
    </div>
  );
}

export default HomePage;
