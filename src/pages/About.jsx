import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import "../styles/about.css";
import logo from "../styles/assets/logo.png";
import about from "../styles/assets/244.png";
import bgimg from "./../styles/assets/111.png";

// Translation object for different languages
const translations = {
  AZ: {
    aboutUs: "Haqqımızda",
    projects: "Layihələr",
    services: "Xidmətlər",
    corporateContacts: "Korporativ əlaqələr",
    description:
      "BloomTech MMC 09.09.2024-cü ildə qurulmuşdur. Şirkət IT sektorunda xidmətlər və  innovasiyalar edərək yeni lahiyələr üzərində işləyir. BloomTech şirkətinin özünə məxsus yeni innovasiya layihələri mövcuddur. BloomTech-in ana hədəf və məqsədi global bazarda öz yerini tutmaqdır.",
    contactEmail: "muradnabiyev777@hotmail.com",
    contactPhone: "+994 10 232 95 89",
  },
  EN: {
    aboutUs: "About Us",
    projects: "Projects",
    services: "Services",
    corporateContacts: "Corporate Contacts",
    description:
      "BloomTech LLC was established on 09.09.2024. The company works on new projects by providing services and innovations in the IT sector. BloomTech has unique innovation projects. The main goal and objective of BloomTech is to find its place in the global market.",
    contactEmail: "muradnabiyev777@hotmail.com",
    contactPhone: "+994 10 232 95 89",
  },
};

const About = () => {
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
      <div className="aboutContainer">
        <div>
          <p>{currentTranslation.description}</p>
        </div>
        <div>
          <img src={about} alt="About BloomTech" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer ">
        <div className="contact-info">
          <div>
            <FiMail /> {currentTranslation.contactEmail}
          </div>
          <div>
            <FiPhone /> {currentTranslation.contactPhone}
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

export default About;
