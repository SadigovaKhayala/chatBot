import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import "../styles/contact.css";
import logo from "../styles/assets/logo.png";
import bgimg from "./../styles/assets/111.png";
import card from "./../styles/assets/credit-card.png";
import shopping from "./../styles/assets/shopping.png";
import restaurant from "./../styles/assets/restaurant.png";

// Translation object for different languages
const translations = {
  AZ: {
    aboutUs: "Haqqımızda",
    projects: "Layihələr",
    services: "Xidmətlər",
    corporateContacts: "Korporativ əlaqələr",
    contactUsHeader:
      "Suallarınızı cavablandırmaq üçün buradayıq. Sadəcə bir mesaj və ya zəng edin!",
    contactEmail: "muradnabiyev777@hotmail.com",
    contactPhone: "+994 10 232 95 89",
  },
  EN: {
    aboutUs: "About Us",
    projects: "Projects",
    services: "Services",
    corporateContacts: "Corporate Contacts",
    contactUsHeader:
      "We're here to answer your questions. Just drop us a message or call!",
    contactEmail: "muradnabiyev777@hotmail.com",
    contactPhone: "+994 10 232 95 89",
  },
};

const Contact = () => {
  const [language, setLanguage] = useState("AZ");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "AZ" ? "EN" : "AZ"));
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const currentTranslation = translations[language];

  return (
    <div className="bloomtech-page">
      <div className="bgImg bgImg2">
        <img src={bgimg} alt="" />
      </div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="BloomTech Logo" />
          </a>
        </div>
        <div className="navlinksLangugage">
          <nav className="nav-links">
            <a href="/about">{currentTranslation.aboutUs}</a>
            <a href="#projects">{currentTranslation.projects}</a>
            <a href="/services">{currentTranslation.services}</a>
            <a href="/contact">{currentTranslation.corporateContacts}</a>
          </nav>
          <div className="language-selector" onClick={toggleDropdown}>
            <span onClick={toggleLanguage} className="dropdown-arrow">
              {language === "AZ" ? "EN" : "AZ"}
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="d-flex align-items-center justify-content-center contactContainer">
        <div className="contactCard bgTransition">
          <div className="d-flex flex-column align-items-start text-start justify-center">
            <h2>{currentTranslation.contactUsHeader}</h2>
          </div>

          <div className="contactInfo">
            <div>
              <FiMail />
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${currentTranslation.contactEmail}`}
                target="_blank"
                rel="noopener noreferrer">
                {currentTranslation.contactEmail}
              </a>
            </div>

            <div>
              <FiPhone />
              <a href={`tel:${currentTranslation.contactPhone}`}>
                {currentTranslation.contactPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="contact-info">
          <div className="firstInfo">
            <FiMail />
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${currentTranslation.contactEmail}`}
              target="_blank"
              rel="noopener noreferrer">
              {currentTranslation.contactEmail}
            </a>
          </div>
          <div>
            <FiPhone />
            <a href={`tel:${currentTranslation.contactPhone}`}>
              {currentTranslation.contactPhone}
            </a>
          </div>
        </div>
        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </footer>
    </div>
  );
};

export default Contact;
