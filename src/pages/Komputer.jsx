import React, { useState } from "react";
import database from "../database";
import "wc-bubble";
import logoAdmin from "./../assets/logo-abb.svg";
import logoUser from "./../assets/user-logo.png";

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
      questionIndex < database.komputer.questions.length
    ) {
      // Valid question index
      const question = database.komputer.questions[questionIndex];
      const answer = database.komputer.answers[questionIndex];

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
      <div className="backgroundImg">
        <div className="chatbot-container"></div>
        <img src={imageUrl} alt="background" />
      </div>
      <div className="chatbotContent">
        <div className="w-full d-flex h-75 flex-column justify-content-center align-items-center ">
          <div className="w-100 d-flex flex-column h-full ">
            <div className="sender">
              <chat-bubble right avatar={logoAdmin}>
                1.Kompüterin parolu dəyişmək və ya blokdan çıxartmaq <br /> 2.
                Yeni kompüter sifariş edilməsi
                <br />
                3. Kompüteri yenisi ilə əvəz edilməsi <br />
                4. Kompüteri təmir etmək lazımdır
              </chat-bubble>
            </div>
            {chat.map((message, index) => (
              <div
                className={message.type === "answer" ? "sender" : "receiver"}>
                {message.type === "answer" ? (
                  <chat-bubble
                    className={
                      message.type === "answer" ? "sender" : "receiver"
                    }
                    avatar={message.type === "answer" ? logoAdmin : logoUser}
                    key={index}>
                    {message.content}
                  </chat-bubble>
                ) : (
                  <chat-bubble
                    right
                    className={
                      message.type === "answer" ? "sender" : "receiver"
                    }
                    avatar={message.type === "answer" ? logoAdmin : logoUser}
                    key={index}>
                    {message.content}
                  </chat-bubble>
                )}
                {/* <chat-bubble
                  className={message.type === "answer" ? "sender" : "receiver"}
                  avatar={message.type === "answer" ? logoAdmin : logoUser}
                  key={index}>
                  {message.content}
                </chat-bubble> */}
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex flex-column h-25 justify-content-center align-items-center ">
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
