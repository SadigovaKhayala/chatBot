import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import "../styles/services.css";
import logo from "../styles/assets/logo.png";
import bgimg from "./../styles/assets/111.png";
import smartphone from "./../styles/assets/smartphone.png";
import support from "./../styles/assets/support.png";
import digital from "./../styles/assets/digital-marketing.png";
import browser from "./../styles/assets/web-browser.png";

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
    servicesList: [
      {
        title: "Mobil proqram yaradılması",
        description:
          "IOS və Android üçün istənilən növ proqramların yığılması və texniki dəstəyi və mövcud proqramınızın improvizasiyası",
      },
      {
        title: "Texniki dəstək",
        description:
          "İT sferasında həm hardware həm software problemlərinin aradan qaldırılması və lazımi qurğuların sazlanması",
      },
      {
        title: "Digital Marketing",
        description:
          "Peşəkar SMM, SMO, SEO və Motion dizaynerlərimizlə xidmətinizdəyik.",
      },
      {
        title: "Saytların yığılması",
        description:
          "Hər növ, istənilən tərzə uyğun saytı peşəkar səviyyədə müştəriyə təhvil verilməsi və sayt üçün texniki dəstək",
      },
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
    servicesList: [
      {
        title: "Mobile App Development",
        description:
          "Development and technical support for any type of application for iOS and Android, and improvement of existing applications.",
      },
      {
        title: "Technical Support",
        description:
          "Resolving both hardware and software issues in the IT sphere and setting up necessary devices.",
      },
      {
        title: "Digital Marketing",
        description:
          "Our team of professional SMM, SMO, SEO experts, and Motion Designers is here to serve you.",
      },
      {
        title: "Website Development",
        description:
          "Professional-level delivery of websites in any style, with ongoing technical support.",
      },
    ],
  },
};

const Services = () => {
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
        {currentTranslation.servicesList.map((service, index) => (
          <div key={index} className="serviceCard bgTransition">
            <div className="d-flex flex-column align-items-start text-start justify-center">
              <h2>{service.title}</h2>
              <h5>{service.description}</h5>
            </div>
            <div className="serviceIcon d-flex flex-column align-items-center h-100 justify-center">
              <img
                src={[smartphone, support, digital, browser][index]}
                alt=""
              />
            </div>
          </div>
        ))}
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

export default Services;
