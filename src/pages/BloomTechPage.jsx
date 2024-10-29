import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import bgimg from "./../styles/assets/111.png";
import "../styles/BloomTechPage.css";
import logo from "../styles/assets/logo.svg";

const BloomTechPage = () => {
  const [language, setLanguage] = useState("AZ");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "AZ" ? "EN" : "AZ"));
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bloomtech-page">
      <div className="bgImg">
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
            <a href="/about">{language === "AZ" ? "Haqqımızda" : "About Us"}</a>
            <a href="/projects">
              {language === "AZ" ? "Layihələr" : "Projects"}
            </a>
            <a href="/services">
              {language === "AZ" ? "Xidmətlər" : "Services"}
            </a>
            <a href="/contact">
              {language === "AZ" ? "Korporativ əlaqələr" : "Corporate Contacts"}
            </a>
          </nav>
          <div className="language-selector" onClick={toggleDropdown}>
            <span onClick={toggleLanguage} className="dropdown-arrow">
              {language === "AZ" ? "EN" : "AZ"}
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <div className="main-overlay">
          <h1 className="mainContent">
            {language === "AZ"
              ? "Gələcəyə doğru uğurlu addımla"
              : "Step towards a successful future"}
          </h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="contact-info">
          <div className="firstInfo">
            {" "}
            <FiMail />{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muradnabiyev777@hotmail.com"
              target="_blank"
              rel="noopener noreferrer">
              muradnabiyev777@hotmail.com
            </a>
          </div>
          <div>
            {" "}
            <div>
              <FiPhone />
              <a href={`tel:+994 10 232 95 89`}> +994 10 232 95 89</a>
            </div>
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

export default BloomTechPage;
