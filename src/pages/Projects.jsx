import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import "../styles/project.css";
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
    description:
      "BloomTech MMC 09.09.2024-cü ildə qurulmuşdur. Şirkət IT sektorunda xidmətlər və yeni innovasiyalar edərək yeni lahiyələr üzərində işləyir. BloomTech şirkətinin özünə məxsus yeni innovasiya layihələri mövcuddur. BloomTech-in ana hədəf və məqsədi global bazarda öz yerini tutmaqdır.",
    contactEmail: "muradnabiyev777@hotmail.com",
    contactPhone: "+994 10 232 95 89",
    credoTitle: "Credo",
    credoSubtitle: "Mobil bankingdə innovasiya",
    credoPoints: [
      "Bir toxunuşla kredit",
      "Kredit xəttinə nəzarət",
      "Yeni rəqəmsal format və daha bir çox şey",
    ],
    bloomTitle: "Bloom",
    bloomSubtitle: "Alış-verişdə çatdırılmanı daha asan etdik.",
    bloomPoints: [
      "Hədiyyələr və aksesuarların sifarişi, çatdırılması və izlənməsini bir toxunuşda etdik.",
    ],
    bloomRestTitle: "Bloom Rest",
    bloomRestSubtitle: "Restoran sistemində yenilik",
    bloomRestPoints: [
      "Asan rezervasiya",
      "Öncədən sifariş",
      "Yenilənmiş reytinq sistemi və daha bir çox şey tətbiqdə bir toxunuşla",
    ],
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
    credoTitle: "Credo",
    credoSubtitle: "Innovation in mobile banking",
    credoPoints: [
      "One-touch credit",
      "Credit line control",
      "New digital format and much more",
    ],
    bloomTitle: "Bloom",
    bloomSubtitle: "We made delivery easier in shopping.",
    bloomPoints: [
      "We made ordering, delivering, and tracking gifts and accessories one touch away.",
    ],
    bloomRestTitle: "Bloom Rest",
    bloomRestSubtitle: "Innovation in restaurant systems",
    bloomRestPoints: [
      "Easy reservation",
      "Advance order",
      "Updated rating system and much more in one touch",
    ],
  },
};

const Projects = () => {
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
      <div className="aboutContainer projectContainer">
        <div className="projectCard bgTransition">
          <div className="projectIcon d-flex flex-column align-items-center h-100 justify-center">
            <img src={card} alt="" />
          </div>
          <div className="d-flex flex-column align-items-start text-start justify-center">
            <h2>{currentTranslation.credoTitle}</h2>
            <h5>{currentTranslation.credoSubtitle}</h5>
            <ul>
              {currentTranslation.credoPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="projectCard bgTransition">
          <div className="projectIcon d-flex flex-column align-items-center h-100 justify-center">
            <img src={shopping} alt="" />
          </div>
          <div className="d-flex flex-column align-items-start text-start justify-center">
            <h2>{currentTranslation.bloomTitle}</h2>
            <h5>{currentTranslation.bloomSubtitle}</h5>
            <ul>
              {currentTranslation.bloomPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="projectCard bgTransition">
          <div className="projectIcon d-flex flex-column align-items-center h-100 justify-center">
            <img src={restaurant} alt="" />
          </div>
          <div className="d-flex flex-column align-items-start text-start justify-center">
            <h2>{currentTranslation.bloomRestTitle}</h2>
            <h5>{currentTranslation.bloomRestSubtitle}</h5>
            <ul>
              {currentTranslation.bloomRestPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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

export default Projects;
