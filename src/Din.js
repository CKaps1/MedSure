//where frontend script logic lives

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CameraCapture from './CameraCapture';
import './Din.css';
import './HomePage.css';
import {Link} from 'react-router-dom';
import covered from './covered';


function Din(){

const [profileData, setProfileData] = useState(null);


const buttonStyle = {
  fontSize: '1rem',
};

  return (
    <div className="din-scanner">
      <div className="viewfinder">
        <div className="viewfinder-text">
          Place DIN/NPN/PDIN
          <br />
          within viewfinder
        </div>
        </div>
        <Link to="/covered" className="user-button" style={buttonStyle}>
          Verify
          </Link>
          <CameraCapture/>
        </div>
  )
};

export default Din;