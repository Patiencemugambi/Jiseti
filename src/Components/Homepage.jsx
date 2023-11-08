import React, { useState } from 'react';
import './homepage.css';
import { Routes, Route } from 'react-router-dom';



function Homepage() {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };



  function confirmLogout() {
    var logoutConfirmation = window.confirm('Are you sure you want to log out?');
    if (logoutConfirmation) {
      window.location.href = '/login';
    }
  }

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
          <li><a href="#about-us">ABOUT US</a></li>
          <li><a href="#reportanincident">REPORT AN INCIDENT</a></li>
          <li><a href="#my-reports">MY REPORTS</a></li>
          <li className="user-profile" onClick={toggleUserProfile}>
          <img src="/Images/usericon.jpeg" className="h-8 w-8" alt="User" /> 

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


      <div id='hero' className="hero-container">
  <div class="text-content">
    <h1>YOUR VOICE AGAINST CORRUPTION</h1>
    <h2>Jiseti is your platform to bring critical issues to light, hold wrongdoers accountable, and drive progress in your community.</h2>
    <h2>Join the movement for Transparency and Justice today!</h2>
    <a class="button-link" href="https://www.eqs.com/compliance-blog/corruption-perceptions-index/" target="_blank">
  Learn More
</a>

  </div>
  <div class="image-content">
    <img src="/Images/no-corruption-4650589_1280.webp" alt="" />
  </div>
</div>





      {/* *********About us*********** */}

      <div id="about-us">
        <h2>ABOUT US</h2>
        <div>
          <div className= 'whoarewe'>
            <h2>Who Are We?</h2>
            <p>We are a passionate team committed to creating positive change in Africa by fighting corruption and promoting transparent and accountable governance.</p>
          </div>
          <div class='ourmission'>
            <h2>Our Mission</h2>
            <p>Empowering Africans to combat corruption and drive meaningful development through transparency and accountability. </p>
          </div>
          <div class='ourvision'>
            <h2>Our Vision</h2>
            <p>We envision a corruption-free Africa where communities flourish, and governments respond to the needs of their citizens with integrity.</p>
          </div>
        </div>
      </div>

      {/* *******report an incident******* */}

      <div id="reportanincident">
        <h2>REPORT AN INCIDENT</h2>
        <div>
          <div class='reportcorruption'>
            <h2>Report Corruption</h2>
            <p>Spot an incident related to corruption? <br />
            Report it here and help us build transparency. Your voice matters. <br />
            Join the fight against corruption today!</p>
            <a href="/redflag" class="report-link">Report Now</a>

          </div>
          <div class='requestintervention'>
            <h2>Request Intervention</h2>
            <p>Need government intervention in your community? <br />
            Whether it's road repairs, bridge fixes, or flood management, submit your request for action. <br />
            Your call, your community, your change!</p>
            <a href="/intervention" class="report-link">Report Now</a>

          </div>
        </div>
      </div>

      {/* ******my reports****** */}

      <div id="my-reports">
        <h2>My Reports</h2>
        {/* Content for My Reports section */}
      </div>



      {/* *******faqs*********** */}
      <div class='faqs'>
        <div>
          <h2>Have any Questions?</h2>
          <p>If you have inquiries for the Jiseti team or an interest in joining our mission to combat corruption in Africa, don't hesitate to get in touch!</p>
        </div>

        
      {/* ********footer********* */}
      </div>
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