import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Landing from './FigmaDesign/Landing';
import Appbar from './FigmaDesign/Appbar'
import API_Dashboard from './components/API_Dashboard';
import UserImage from './components/UserImage';
import Add_NewImage from './components/Add_NewImage';
import Update_Delete from './components/Update_Delete';

function App() {
  console.log('App component rendered');

  return (
    <RecoilRoot>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path="/Add-Image" element={<Add_NewImage />} />
            <Route path="/Api-dashboard" element={<API_Dashboard />} />
            <Route path="/User-Image" element={<UserImage />} />
            <Route path="/Update-Delete" element={<Update_Delete />} />
          </Routes>
        </Router>
      </>
    </RecoilRoot>
  );
}

export default App;
