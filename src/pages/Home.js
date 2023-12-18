import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import "../assets/css/animate.css";
import "../assets/css/owl.css";
import "../assets/css/flex-slider.css";
import "../assets/css/templatemo-woox-travel.css";


const Home=({token})=>{

    useEffect(() => {

        $(window).on('load', function() {
            $('#js-preloader').addClass('loaded');
          });
      
    
        function bannerSwitcher() {
          let next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
          if (next.length) next.prop('checked', true);
          else $('.sec-1-input').first().prop('checked', true);
        }
    
        let bannerTimer = setInterval(bannerSwitcher, 5000);
        
    
        $('nav .controls label').click(function () {
          clearInterval(bannerTimer);
          bannerTimer = setInterval(bannerSwitcher, 5000);
        });
    
        // Cleanup interval when component unmounts
        return () => {
          clearInterval(bannerTimer);
        };
      }, []);




      
    return(
        <div>
                        {/*  Preloader Start*/}
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>   
        </div>

       

{/* <!-- ***** Main Banner Area Start ***** --> */}
      <section id="section-1">
        <div className="content-slider">
            <input type="radio" id="banner1" className="sec-1-input" name="banner" checked/>
            <input type="radio" id="banner2" className="sec-1-input" name="banner"/>
            <input type="radio" id="banner3" className="sec-1-input" name="banner"/>
            <input type="radio" id="banner4" className="sec-1-input" name="banner"/>
            <div className="slider">
            <div id="top-banner-1" className="banner">
                <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                    <h2>WELCOME TO SMART BLOOD BANK</h2>
                    <h1>Our Partners</h1>
                    <div className="border-button"><Link to="about.html">Visit</Link></div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="more-info">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Patients:</span><br/>3500</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Donors:</span><br/>3275<em>2</em></h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>Lives Saved:</span><br/>2980</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                                <Link to="https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability" className="active">Explore More</Link>
                            </div>
                            </div>
                        </div> 
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="top-banner-2" className="banner">
                <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                    <h2>WELCOME TO SMART BLOOD BANK</h2>
                    <h1>Our Lab</h1>
                    <div className="border-button"><Link to="about.html">Visit</Link></div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="more-info">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Patients</span><br/>8.66 M</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Donors</span><br/>41290<em>2</em></h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>Lives Saved:</span><br/>100200</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                                <Link to="https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability" className="active">Explore More</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="top-banner-3" className="banner">
                <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                    <h2>WELCOME TO SMART BLOOD BANK</h2>
                    <h1>Our Clients</h1>
                    <div className="border-button"><Link to="about.html">Visit</Link></div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="more-info">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Patients:</span><br/>67</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Donors:</span><br/>551<em>2</em></h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>Lives Saved:</span><br/>425</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                                <Link to="about.html">Explore More</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="top-banner-4" className="banner">
                <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                    <h2>WELCOME TO SMART BLOOD BANK</h2>
                    <h1>Our Donors</h1>
                    <div className="border-button"><Link to="about.html">Visit</Link></div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="more-info">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Patients:</span><br/>69</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Donors:</span><br/>513<em>2</em></h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>Lives Saved:</span><br/>16550</h4>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                                <Link to="about.html">Explore More</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <nav>
            <div className="controls">
                <label for="banner1"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">1</span></label>
                <label for="banner2"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">2</span></label>
                <label for="banner3"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">3</span></label>
                <label for="banner4"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">4</span></label>
            </div>
            </nav>
        </div>
    </section>
      {/* <!-- ***** Main Banner Area End ***** --> */}

    <div className="visit-country">
            <div className="container">
            <div className="row">
                <div className="col-lg-5">
                <div className="section-heading">
                    <h2>Visit our Hospital</h2>
                    <p>Blood performs many important functions within the body, including: Supply of oxygen to tissues 
                    (bound to hemoglobin, which is carried in red cells) Removal of waste such as carbon dioxide, urea, and lactic acid.</p>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                <div className="items">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="item">
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">
                            <div className="image">
                                <img src="assets/images/country-01.jpg" alt=""/>
                            </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                            <div className="right-content">
                                <h4>Our Patients</h4>
                                <span>Kitwe Hospital</span>
                                <div className="main-button">
                                <Link to="https://kth.gov.zm/#" className="active">Explore More</Link>
                                </div>
                                <p>
                                Blood performs many important functions within the body, including:
                                Supply of oxygen to tissues (bound to hemoglobin, which is carried in red cells)
                                Removal of waste such as carbon dioxide, urea, and lactic acid
                                </p>
                                
                                <div className="text-button">
                                <Link to="https://kth.gov.zm/#" className="active">Read More ? <i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            </div>
                        </div> 
                        </div>
                    </div>
                    <div className="col-lg-12">  
                        <div className="item">
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">
                            <div className="image">
                                <img src="assets/images/country-02.png" alt=""/>
                            </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                            <div className="right-content">
                                <h4>Our Partners</h4>
                                <span>Word Health Organization</span>
                                <div className="main-button">
                                <Link to="https://www.redcrossblood.org/donate-blood/blood-donation-process/donation-process-overview.html" className="active">Explore More</Link>
                                </div>
                                <p>The blood donation process from the time you arrive until the time you leave takes about an hour. The donation itself is only about 8-10 minutes on average.</p>
                                
                                <div className="text-button">
                                <Link to="https://www.redcrossblood.org/donate-blood/blood-donation-process/donation-process-overview.html" className="active">Read More ? <i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="item last-item">
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">
                            <div className="image">
                                <img src="assets/images/country-03.jpg" alt=""/>
                            </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                            <div className="right-content">
                                <h4>Our Donors</h4>
                                <span>Kitwe</span>
                                <div className="main-button">
                                <Link to="https://www.redcrossblood.org/donate-blood/blood-donation-process/donation-process-overview.html" className="active">Explore More</Link>
                                </div>
                                <p>The blood donation process from the time you arrive until the time you leave takes about an hour. The donation itself is only about 8-10 minutes on average.</p>
                            
                                <div className="text-button">
                                <Link to="https://www.redcrossblood.org/donate-blood/blood-donation-process/donation-process-overview.html" className="active">Read More ? <i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <ul className="page-numbers">
                        <li><Link to="#"><i className="fa fa-arrow-left"></i></Link></li>
                        <li><Link to="#">1</Link></li>
                        <li className="active"><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#"><i className="fa fa-arrow-right"></i></Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="side-bar-map">
                    <div className="row">
                    <div className="col-lg-12">
                        <div id="map">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="550px" frameborder="0" style="border:0; border-radius: 23px; " allowfullscreen=""></iframe> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

 <div className="call-to-action">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2>Donate Now</h2>
          <h4>Save A Life</h4>
        </div>
        <div className="col-lg-4">
          <div className="border-button">
            <a href="reservation.html">Visit Our</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1>{token}</h1>
        </div>
        );
}
export default Home;