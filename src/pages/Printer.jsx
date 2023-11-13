import React, { useState } from "react";
import database from "../database";
import "wc-bubble";

const Komputer = () => {
  const imageUrl = "https://abb-bank.az/img/ibar-about-new-logo.svg";
  const [inputValue, setInputValue] = useState("");
  const [chat, setChat] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return; // Prevent adding empty messages
    }

    const questionIndex = parseInt(inputValue, 10) - 1;

    if (
      questionIndex >= 0 &&
      questionIndex < database.printer.questions.length
    ) {
      // Valid question index
      const question = database.printer.questions[questionIndex];
      const answer = database.printer.answers[questionIndex];

      setChat((prevChat) => [
        ...prevChat,
        { type: "question", content: question },
        { type: "answer", content: answer },
      ]);
    } else {
      // Invalid question index
      setChat((prevChat) => [
        ...prevChat,
        { type: "answer", content: "I'm sorry, I don't understand." },
      ]);
    }

    setInputValue("");
  };

  return (
    <>
      <div>
        <div>
          <chat-bubble>
            1. Printeri və skaneri kompüterə qoşulması
            <br />
            2. Printerində çap etmək mümkün deyil <br />
            3.Printerdə kağız ilişib
          </chat-bubble>
        </div>

        <div className="w-100 d-flex flex-column ">
          {chat.map((message, index) => (
            <div className={message.type === "answer" ? "sender" : "receiver"}>
              <chat-bubble key={index}>{message.content}</chat-bubble>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column justify-content-end align-items-center w-100  pb-5 mt-5">
          <form onSubmit={handleSubmit} className="w-75 d-flex">
            <div className="input-group mb-3">
              <input
                type="text"
                id="inputValue"
                name="inputValue"
                className="form-control"
                value={inputValue}
                onChange={handleChange}
                title="Please enter a value "
                aria-describedby="button-addon2"
                placeholder="Seçiminizi daxil edin"
                required
              />
              <button
                className="btn btn-light"
                id="button-addon2"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Komputer;
