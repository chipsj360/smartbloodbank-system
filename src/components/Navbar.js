import "../../node_modules/jquery/dist/jquery.min.js";
import myimage from '../assets/images/Designer.png'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Helmet } from 'react-helmet';
// import "../assets/css/bootstrap.min.css"
import "../assets/css/fonts/icomoon/style.css"
import "../assets/css/owl.carousel.min.css";

import '../assets/css/prefix.css'
import "../assets/css/offcanvas-navbar.css"
import useToken from '../hooks/useToken';
import React, { useEffect } from 'react';

const Navbar = () => {
  const{logout}=useToken()

  const handleLogout=()=>{
   logout()
  }
 useEffect(() => {
    const handleNavbarCollapse = () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open');
    };

    const navbarSideCollapse = document.querySelector('#navbarSideCollapse');
    navbarSideCollapse.addEventListener('click', handleNavbarCollapse);

    return () => {
      navbarSideCollapse.removeEventListener('click', handleNavbarCollapse);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow mb-4" aria-label="Main navigation">
      <div className="container-fluid">
        <i className="bi bi-cart-dash px-2" style={{ fontSize: '2rem', color: 'rgb(47, 108, 223)' }}></i>
        <a class="navbar-brand" >
          <img src={myimage} className="logo" />
        </a>
        <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
          
          <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">login</a></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
            <li><button class="dropdown-item" onClick={handleLogout}>logout</button></li>
          </ul>
        </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;