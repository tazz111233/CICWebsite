import React, { useState } from 'react';
import './App.css';
import Banner from './Banner.png';
import PartnersImage from './program.jpg';
import CourseTimeline from './coursetimeline.jpg';
import curriculum from './curiculum.jpg';
import coding from './Coding1.png';
import who from './who.jpg';
import ai from './AI.jpg';
import partners from './partners.jpg';
import team from './OurTeam.jpg';
import advisory1 from './advisory1.jpg';
import advisory2 from './advisory2.jpg';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn, FaBars } from 'react-icons/fa';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownSelect = (value) => {
    setDropdownOpen(false);
    if (value) {
      window.location.href = value; // Redirects to the selected section
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Banner} alt="Header" className="header-footer-image" />
        <h1 className="header-title">Coding in Colour</h1>
        <div className="header-buttons">
          <button onClick={() => window.location.href = '#program'}>PROGRAM</button>
          <button onClick={() => window.location.href = '#partners'}>PARTNERS</button>
          <button onClick={() => window.location.href = '#ai'}>AGE OF AI</button>
          <button onClick={() => window.location.href = '#footer'}>CONTACT</button>
        </div>

        {/* Dropdown Menu */}
        <div className="custom-dropdown">
          
          <FaBars id='menu' style={{ color: 'white' }} onClick={toggleDropdown} />
           
          {dropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={() => handleDropdownSelect('#program')}>PROGRAM</div>
              <div className="dropdown-item" onClick={() => handleDropdownSelect('#partners')}>PARTNERS</div>
              <div className="dropdown-item" onClick={() => handleDropdownSelect('#ai')}>AGE OF AI</div>
              <div className="dropdown-item" onClick={() => handleDropdownSelect('#footer')}>CONTACT</div>
            </div>
          )}
        </div>

        <h2 className="header-subtitle">Shape your<br />future with us</h2>
        <img src={coding} alt="Coding" className="logoimg"  />
      </header>

      <main className="App-content">
        <section id="who" className="section">
          <img src={who} alt="Who we are" className="section-image" />
        </section>
        <section id="program" className="section">
          <img src={PartnersImage} alt="Our Program" className="section-image" />
        </section>
        <section id="partners" className="section">
          <img src={partners} alt="Our Partners" className="section-image" />
        </section>
        <section className="section">
          <img src={curriculum} alt="Curriculum" className="section-image" />
        </section>
        <section id="ai" className="section">
          <img src={ai} alt="Age of AI" className="section-image" />
        </section>
        <section id="timeline" className="section">
          <img src={CourseTimeline} alt="timeline" className="section-image" />
        </section>
        <section id="advisory1" className="section">
          <img src={advisory1} alt="timeline" className="section-image" />
        </section>
        <section id="advisory2" className="section">
          <img src={advisory2} alt="timeline" className="section-image" />
        </section>
        <section id="ourteam" className="section">
          <img src={team} alt="timeline" className="section-image-linkedin" />
          <button className="linkedin-button0" onClick={() => window.location.href = "https://www.linkedin.com/in/tariq-tyab-668057185/"}></button>
          <button className="linkedin-button1" onClick={() => window.location.href = "https://www.linkedin.com/in/yusuf-siraj/"}></button>
          <button className="linkedin-button2" onClick={() => window.location.href = "https://www.linkedin.com/in/hafsabzahid/"}></button>
          <button className="linkedin-button3" onClick={() => window.location.href = "https://www.linkedin.com/in/aleemtariq/"}></button>
          <button className="linkedin-button4" onClick={() => window.location.href = "https://www.linkedin.com/in/tasneem-mahmud-74bb35158/"}></button>
          <button className="linkedin-button5" onClick={() => window.location.href = "https://www.linkedin.com/in/yaman-sanobar/"}></button>
          <button className="linkedin-button6" onClick={() => window.location.href = "https://www.linkedin.com/in/sallyalhamdan/"}></button>
          <button className="linkedin-button7" onClick={() => window.location.href = "https://docs.google.com/forms/d//edit"}></button>
          <button className="linkedin-button8" onClick={() => window.location.href = "https://www.linkedin.com/in/fztillah/"}></button>
        </section>
      </main>

      <footer id="footer" className="App-footer">
        <img src={Banner} alt="Footer Gradient" className="footer-image" />
        <h1 className="footer-title">Let's connect</h1>
        <button className="signup-button" onClick={() => window.location.href = "https://docs.google.com/forms/d/14Cq1mWess8gFws-mCrldQj2u0sIH67yieu4tSkumrmU/edit"}>SIGN UP NOW</button>

        <div className="social-icons">
          <a href="https://www.instagram.com/codingincolour?igsh=MW9jNG42bzY2c3M2aQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://youtube.com/@codingincolour?si=Naw-34k5hzsqyX1E" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/showcase/codingincolour/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
