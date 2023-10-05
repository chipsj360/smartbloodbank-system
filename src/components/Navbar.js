import $ from 'jquery';
import React, { useEffect } from 'react';
const Navbar = () => {
	// Menu Dropdown Toggle
   

    return ( 
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* Logo Start */}
                            <a href="index.html" className="logo">
                                <img src="assets/images/log.png" alt=""/>
                            </a>
                            {/*Logo End  */} 
                            {/*  Menu Start  */}
                            <ul className="nav">
                                <li><a href="index.html" className="active">Home</a></li>
                                
                                <li><a href="login.php">Login</a></li>
                            </ul>   
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
       </header>
     );
}
 
export default Navbar;