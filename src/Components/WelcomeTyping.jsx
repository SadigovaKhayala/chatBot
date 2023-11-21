import React, { useEffect, useState } from "react";

const WelcomeTyping = () => {
  const submittedData = localStorage.getItem("submittedData");
  const [text, setText] = useState("");

  const name = submittedData ? JSON?.parse(submittedData).name : "";
  const phrases = [
    `
  Texniki
  dəstək üzrə
  çat-bota xoş gəlmisiniz,
  ${
    name ? `${name}` : ""
  }  👋. Müraciətinizə uyğun kateqoriyanı seçməyiniz xahiş olunur.`,
  ];

  useEffect(() => {
    const submittedData = localStorage.getItem("submittedData");
    const parsedData = submittedData ? JSON.parse(submittedData) : null;
    const name = parsedData && parsedData.name ? parsedData.name : "";

    const completePhrases = [...phrases];

    // completePhrases.push("");

    let currentIndex = 0;
    let currentText = "";
    let phraseIndex = 0;

    const interval = setInterval(() => {
      if (phraseIndex === completePhrases.length) {
        clearInterval(interval);
        return;
      }

      const currentPhrase = completePhrases[phraseIndex];

      if (currentIndex < currentPhrase.length) {
        currentText += currentPhrase[currentIndex];
        setText(currentText);
        currentIndex += 1;
      } else {
        currentIndex = 0;
        phraseIndex += 1;
        if (phraseIndex !== completePhrases.length) {
          currentText += " "; // Add space between phrases
        }
      }
    }, 30); // Adjust the typing speed by changing the interval time (milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="typing-animation col-6 ps-4  text-start ">
      <span>{text}</span>
      <span className="cursor"></span>
      <p></p>
    </div>
  );
};

export default WelcomeTyping;
