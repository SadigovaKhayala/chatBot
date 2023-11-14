import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Chatbot.scss";
import db from "../data.json";

const ChatBot = () => {
  const [categorySelect, SetcategorySelect] = useState("");
  const navigate = useNavigate();
  const imageUrl = "https://abb-bank.az/img/ibar-about-new-logo.svg";

  const handleChange = (e) => {
    const { value } = e.target;
    SetcategorySelect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Value submitted:", categorySelect);
    categorySelect == 1 && navigate("/computer");
    categorySelect == 2 && navigate("/printer");
    categorySelect == 3 && navigate("/email");
  };

  ///test
  async function createPost() {
    const res = await fetch(" http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
        author: "khayala",
        content: "test ",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json;
    console.log(data);
  }
  return (
    <>
      <div className="backgroundImg">
        <div className="chatbot-container"></div>
        <img src={imageUrl} alt="background" />
      </div>
      <div className=" w-full  d-flex  chatbotContent">
        <div className="w-full d-flex h-50 flex-column justify-content-center align-items-center overflow-scroll">
          <div className="header w-75 mt-5 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="p-3">
              Salam dəyərli həmkarımız! Müraciət hansı mövzu ilə bağlıdır
              aşağıdakılardan seçib rəqəm yazılması Sizdən xahiş olunur:
            </h2>
          </div>

          <div className="selectBox mt-5 w-100 p-5 d-flex flex-column justify-content-start align-items-start">
            <h5 className="selectCategory">1.Komputer</h5>
            <h5 className="selectCategory">2.Printer</h5>
            <h5 className="selectCategory">3.Email</h5>
          </div>
        </div>
        <div className="d-flex flex-column h-25 justify-content-center align-items-center ">
          <form onSubmit={handleSubmit} className="w-75 d-flex">
            <div className="input-group ">
              <input
                type="text"
                id="inputValue"
                name="inputValue"
                className="form-control"
                value={categorySelect}
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
              <button
                onClick={() => {
                  createPost();
                }}
                className="btn btn-light"
                id="button-addon3"
                type="submit">
                add data
              </button>
            </div>
          </form>
        </div>
        ;
      </div>
    </>
  );
};

export default ChatBot;
