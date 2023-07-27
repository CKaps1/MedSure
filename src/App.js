import { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import CameraCapture from './CameraCapture';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import HomePage from './HomePage';
import PatientPage from './PatientPage';
import ClinicianPage from './ClinicianPage';
import Na from './Na';
import Din from './Din';
import covered from './covered';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <Routes>
                 <Route exact path='/' element={< HomePage />}></Route>
                 <Route exact path='/PatientPage' element={< PatientPage />}></Route>
                 <Route exact path='/ClinicianPage' element={< ClinicianPage />}></Route>
                 <Route exact path='/Na' element={< Na />}></Route>
                 <Route exact path='/Din' element={< Din />}></Route>
                 <Route exact path='/covered' element={< covered />}></Route>
          </Routes>

          </header>
            </div>
      </Router>
  );
}

export default App;
