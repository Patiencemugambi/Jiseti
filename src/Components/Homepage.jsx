import React, { useState } from 'react';
import './homepage.css';
import { Routes, Route } from 'react-router-dom';
import Reports from './Reports';



function Homepage({ isLoggedIn, setIsLoggedIn }) {
  const [showUserProfile, setShowUserProfile] = useState(false);
  

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

 
  const confirmLogout = () => {
    const logoutConfirmation = window.confirm('Are you sure you want to log out?');
    if (logoutConfirmation) {
      localStorage.removeItem('token'); // Remove the token from localStorage on logout
      setIsLoggedIn(false); // Update the app state to indicate the user is logged out
      window.location.href = '/login'; // Redirect to the login page
    }
  }; 

  // Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scroll({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });


  
  return (
    <div>

      {/* *********nav********* */}

      <nav>
        <ul className="navbar">
          <li><a href="#hero">HOME</a></li>
          {isLoggedIn && <li><a href="#about-us">ABOUT US</a></li>}
          {isLoggedIn && <li><a href="#reports">MY REPORTS</a></li>}
          {isLoggedIn && <li><a href="#reportanincident">REPORT AN INCIDENT</a></li>}
          {!isLoggedIn && <li><a href="/login">LOGIN</a></li>}
          {!isLoggedIn && <li><a href="/register">SIGN UP</a></li>}
          <li className="user-profile" onClick={toggleUserProfile}>
          <img src="https://i.pinimg.com/564x/32/dd/d7/32ddd7aa5495a0bfa4a48d0ffa4c4fd6.jpg" className="h-6 w-6" alt="User" /> 

            {showUserProfile && (
              <div className="user-profile-expanded">
                <h2>User Profile</h2>
                <hr />
                <a href="#notifications"> Notifications</a><br />
                <hr />
                <a href="#settings"> Settings</a> <br />
                <hr />
                <a href="#logout" onClick={confirmLogout}>Log out</a>


                
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* *********hero********* */}

<div id='hero' class="hero-container">
  <div class="text-content">
    <h1>YOUR VOICE AGAINST <br /> <span class="highlight-word">CORRUPTION</span></h1>
    <h2>Jiseti is your platform to bring critical issues to light, hold wrongdoers accountable, and drive progress in your community.</h2>
    <h2>Join the movement for Transparency and Justice today!</h2>
    <a class="button-link" href="https://www.eqs.com/compliance-blog/corruption-perceptions-index/" target="_blank">
      Learn More
    </a>
  </div>
  <div class="image-content">
    <img src="https://cdn.pixabay.com/photo/2019/11/24/23/25/no-corruption-4650589_1280.png" alt="No Corruption" />
  </div>
</div>






      {/* *********About us*********** */}
     
      <div id="about-us" className="about-section">
        <h2> <span id='aboutustxt'>ABOUT US</span></h2>
        <div className="card-container">
        <div className="card whoarewe">
            <h2>Who Are We?</h2>
            <p>We are a passionate team committed to creating positive change in Africa by fighting corruption and promoting transparent and accountable governance.</p>
          </div>
          <div className="card ourmission">
            <h2>Our Mission</h2>
            <p>Empowering Africans to combat corruption and drive meaningful development through transparency and accountability. </p>
          </div>
          <div className="card ourvision">
            <h2>Our Vision</h2>
            <p>We envision a corruption-free Africa where communities flourish, and governments respond to the needs of their citizens with integrity.</p>
          </div>
        </div>
      </div>
     
      {/* *******report an incident******* */}
{isLoggedIn &&
<div id="reportanincident">
  <h2 id='reporth2'>REPORT AN INCIDENT</h2>
  <div class="report-sections">
    <div class="reportcorruption">
      <h2>Report Corruption</h2>
      <p>Spot an incident related to corruption? <br />
        Report it here and help us build transparency. <br />
         Your voice matters. <br /></p>
       <p> Join the fight against corruption today!</p>
      <a href="/redflag" class="report-link">Report Now</a>
    </div>
    <div class="requestintervention">
      <h2>Request Intervention</h2>
      <p>Need government intervention in your community? <br />
        Whether it's road repairs, bridge fixes, or flood management. <br /> Submit your request for action. <br /></p>
       <p>Your call, your community, your change!</p>
      <a href="/intervention" class="report-link">Request Now</a>
    </div>
  </div>
</div>
}

      {/* ******my reports****** */}
      {isLoggedIn &&
      <div id="my-reports">
        <h2 class="requestintervention" >My Reports</h2>
        <Reports/>
      </div>
      }


      {/* *******faqs*********** */}
      <div class='faqs'>
        <div> 
          <div>
          <h2>Have any Questions?</h2>
          <p>If you have inquiries for the Jiseti team or an interest in  joining our mission to combat <br /> corruption in Africa, don't hesitate to get in touch!</p>
          <a href="/contact" class="report-link">Contact Us</a>

          </div>
          <div>
            <img src="https://previews.123rf.com/images/argus456/argus4561605/argus456160522386/57141285-stop-corruption-3d-rendering-red-sticker-with-white-text.jpg" alt="" />
          </div>
        </div>
        <div class='faq-questions'>
          <h2>FAQs</h2>
              <p className="user-profile" onClick={toggleUserProfile}>
                <h1>1. What is Jiseti</h1>

            {showUserProfile && (
              <div className="faq-expanded">
                <p>Jiseti is a platform designed to combat corruption in Africa by allowing citizens to report incidents and request government intervention in various issues. It empowers users to contribute to transparency and accountability.</p>                
              </div>
            )}
          </p>
          <p className="user-profile" onClick={toggleUserProfile}>
                <h1>2. How can I create an account on Jiseti?</h1>

            {showUserProfile && (
              <div className="faq-expanded">
                <p>To create an account ...</p>
              </div>
            )}
          </p>
          <p className="user-profile" onClick={toggleUserProfile}>
                <h1>3. What are Red Flags?</h1>

            {showUserProfile && (
              <div className="faq-expanded">
                <p>Red Flags are</p>
              </div>
            )}
          </p>
          <p className="user-profile" onClick={toggleUserProfile}>
                <h1>4. What are Intervention Records?</h1>

            {showUserProfile && (
              <div className="faq-expanded">
                <p>Red Flags are</p>
              </div>
            )}
          </p>                 
      </div>
      </div>


      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <img src="https://i.pinimg.com/564x/28/50/a1/2850a1b5dc9df03106233da06440cb0f.jpg" alt="Scroll to Top" />
</button>


              
      {/* ********footer********* */}
      <footer>
        <div>
          <h2>Navigation Links</h2>
          <ul>
            <li></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contactus">Contact Us</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div>
          <p><a href="/terms">Terms of Use </a></p>
          <p><a href="/terms">Privacy Policy</a></p>          
        </div>
        <div>
          <h2>© 2023 Jiseti. All Rights Reserved</h2>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;