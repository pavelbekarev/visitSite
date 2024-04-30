import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StartPage } from './pages/StartPage';
import { AboutMe } from './pages/AboutMe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Services } from './pages/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />}/>
          <Route path='/about' element={<AboutMe />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
