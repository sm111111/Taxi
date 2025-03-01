import React from "react";
import './App.css'
import HomePage from './components/homePage/HomePage'
import { Outlet } from "react-router-dom";

import Navbar from '../src/components/navbar/Navbar'
const App = () => {
  return (
    <>
      <div className="frezz-navbar">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default App;
