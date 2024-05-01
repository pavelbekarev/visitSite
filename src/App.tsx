import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StartPage } from './pages/StartPage';
import { AboutMe } from './pages/AboutMe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Services } from './pages/Services';
import { Reviews } from './pages/Reviews';
import { Contacts } from './pages/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/visitSite' element={<StartPage />}/>
          <Route path='/about' element={<AboutMe />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
