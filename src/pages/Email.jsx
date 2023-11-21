import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import database from "../database";
import "wc-bubble";
import logoAdmin from "./../assets/logo-abb.svg";
import logoUser from "./../assets/user-logo.png";
import Typing from "../Components/Typing";

const Email = () => {
  const imageUrl = "https://abb-bank.az/img/ibar-about-new-logo.svg";
  const [inputValue, setInputValue] = useState("");
  const messageBoxRef = useRef(null);
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);
  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const submittedData = localStorage.getItem("submittedData");
  const parsedData = submittedData ? JSON.parse(submittedData) : null;
  const name = parsedData && parsedData.name ? parsedData.name : "";

  useEffect(() => {
    setFirstLoading(true);
    const timeout = setTimeout(() => {
      setFirstLoading(false);
    }, 1200); // 1 second delay

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [isLoading, chat]);

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    const questionIndex = parseInt(inputValue, 10) - 1;

    if (questionIndex >= 0 && questionIndex < database.email.questions.length) {
      const question = database.email.questions[questionIndex];
      const answer = database.email.answers[questionIndex];

      setChat((prevChat) => [
        ...prevChat,
        { type: "question", content: question },
        { type: "answer", content: answer },
      ]);
    } else {
      setChat((prevChat) => [
        ...prevChat,
        { type: "answer", content: "I'm sorry, I don't understand." },
      ]);
    }

    setInputValue("");
    scrollToBottom();
    LoaderFunction();
  };

  //typing

  const LoaderFunction = () => {
    setIsLoading(true);

    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loaderTimeout);
    };
  };

  return (
    <div className="chatbotContent d-flex align-items-center justify-content-center">
      <div className="background">{<img src={imageUrl} alt="" />}</div>
      <div className="welcomeToChatbot justify-content-around text-center container d-flex align-items-start justify-content-start  d-flex p-5 flex-column  ">
        <div className="row d-flex align-items-start justify-content-between welcomeToChatbotInner  ">
          <div className=" flex-row col-12 d-flex align-items-start justify-content-start">
            <div className="d-flex  col-12">
              <div className="col-9 d-inline    text-start">
                <p className=" pb-2">
                  Texniki dəstək üzrə çat-bota xoş gəlmisiniz, {name} 👋
                </p>
              </div>
              <div className="col-3 text-end">
                {" "}
                <Link to="/">Əsas menyuya qayıt</Link>
              </div>
            </div>
          </div>

          <div
            ref={messageBoxRef}
            style={{ overflowY: "scroll" }}
            className="col-12 d-flex flex-column h-full messageBox ">
            <div className="sender">
              <div className="text-center mb-0 mt-2">
                <p className="text-center mb-0">
                  Email ilə bağlı bütün müraciətlər.
                </p>
              </div>
            </div>
            <div className="answer">
              <div className="answerContainer">
                <div></div>
                <div className="adminLogo">
                  <img src={logoAdmin} alt="" />
                </div>

                {firstLoading ? (
                  <Typing />
                ) : (
                  <div className="flex align-items-start justify-content-center h-full text-align-center">
                    <p> 1. Yeni mail adresinin yaratılması</p>
                    <p>2. Email adresinin arxivləşdirilməsi.</p>
                    <p>3. Email qrupunun əlavə edilməsi.</p>
                    <p>4. Digər müraciətlər.</p>
                  </div>
                )}
              </div>
            </div>
            {isLoading && scrollToBottom()}
            {chat.map((message, index) =>
              index == chat.length - 1 && isLoading ? (
                <Typing />
              ) : (
                <>
                  {message.type === "answer" ? (
                    <div className="answer">
                      <div className="answerContainer">
                        <div className="adminLogo">
                          <img src={logoAdmin} alt="" />
                        </div>
                        <div className="d-flex align-items-start justify-content-center h-100 text-align-center message">
                          <p className=" m-0">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="sender">
                      <div className="text-center mb-0">
                        <p className="text-center m-0">{message.content}</p>
                      </div>
                    </div>
                  )}
                </>
              )
            )}
          </div>

          <div className="inputForm w-100  col-12 d-flex align-items-center justify-content-center ">
            <form onSubmit={handleSubmit} className="w-100 d-flex ">
              <div className="input-group ">
                <input
                  type="text"
                  id="inputValue"
                  name="inputValue"
                  className="form-control text-start ps-5"
                  value={inputValue}
                  onChange={handleChange}
                  title="Please enter a value "
                  aria-describedby="button-addon2"
                  placeholder="Seçiminizi daxil edin"
                  required
                />
                <button
                  onSubmit={handleSubmit}
                  className="btn btn-light"
                  id="button-addon2"
                  type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
