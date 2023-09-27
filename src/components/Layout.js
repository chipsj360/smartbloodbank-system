// NavbarLayout.js
import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import { useLocation } from 'react-router-dom';

function NavbarLayout({ children }) {
  const location=useLocation();
  const[showNavbar,setShowNavbar]=useState(false)

  useEffect(()=>{
    console.log('this is location',location)
    if(location.pathname==='/admindashboard'){
      setShowNavbar(false)
    }else{
      setShowNavbar(true)
    }
  },[location])
  return (
    <div>
    
      {showNavbar&&children}
    </div>
  );
}

export default NavbarLayout;
