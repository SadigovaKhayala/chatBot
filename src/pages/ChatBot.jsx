import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./../styles/Chatbot.scss";
//asserts
import imageUrl from "./../assets/bg.png";
import imageUrl2 from "./../assets/bg2.png";
//components
import WelcomeTyping from "../Components/WelcomeTyping";
import UserForm from "../Components/UserForm";
const ChatBot = (props) => {
  const [chatStart, SetChatStart] = useState(false);
  const submittedData = localStorage.getItem("submittedData");
  const emailLink = `mailto:khayala.sadigova@abb-bank.az?subject=${encodeURIComponent(
    "diger muraciet"
  )}&body=${encodeURIComponent("salam")}`;
  //react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //functions
  async function createPost(info) {
    const res = await fetch(" http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
        name: info.name,
        surname: info.surname,
        userID: info.userID,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json;
    console.log(data);
  }
  const onSubmit = (data) => {
    SetChatStart(true);
    props.setData(data);
    createPost(data);
    console.log(data);

    // Save the submitted data to localStorage
    localStorage.setItem("submittedData", JSON.stringify(data));

    ///

    // Function to save data to localStorage
    setTimeout(() => {
      localStorage.removeItem("submittedData");
    }, 60 * 60 * 1000); // Clear data after 1 minute (60 seconds * 1000 milliseconds)
  };

  return (
    <div className="chatbotContent d-flex align-items-center justify-content-center">
      {submittedData ? (
        <div className="welcomeToChatbot justify-content-around text-center container d-flex align-items-center justify-content-start p-5 flex-column col-12">
          <div className="row">
            <div className="col-12 d-flex d-flex  align-items-start  flex-column">
              <WelcomeTyping />

              <div className="row">
                <div className="col-6 selectCategory d-flex align-items-center justify-content-center text-center text-decoration-none">
                  <div className="categories d-flex col-12 mt-5  align-items-center text-align-center   justify-content-center flex-column">
                    <Link
                      to="/computer"
                      className="selectCategory d-flex align-items-center justify-content-center  text-center text-decoration-none">
                      Kompyuterlə bağlı bütün müraciətlər.
                    </Link>

                    <Link
                      to="/printer"
                      className="selectCategory d-flex align-items-center justify-content-center  text-center text-decoration-none">
                      Printer və scanner ilə bağlı bütün müraciətlər.
                    </Link>

                    <Link
                      to="/email"
                      className="selectCategory d-flex align-items-center justify-content-center  text-center text-decoration-none">
                      Email ilə bağlı bütün müraciətlər.
                    </Link>

                    <Link
                      to="/ipPhone"
                      className="selectCategory d-flex align-items-center justify-content-center  text-center text-decoration-none">
                      İP telefon ilə bağlı bütün müraciətlər .
                    </Link>

                    <a
                      className="selectCategory d-flex align-items-center justify-content-center  text-center text-decoration-none"
                      href={emailLink}
                      target="_blank"
                      rel="noopener noreferrer">
                      Digər müraciətlər.
                    </a>
                  </div>
                </div>

                <div className="col-6 ">
                  <img className="imageBG" src={imageUrl2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="welcomeToChatbot text-center justify-content-around container d-flex align-items-center justify-content-start p-5 flex-column col-12">
          <div className="row">
            <div className="col-12">
              <h3 className="pt-4 ">
                Salam dəyərli həmkarımız! Texniki dəstək üzrə çat-bota xoş
                gəlmisiniz.
              </h3>
              <h3 className="pt-2">
                Zəhmət olmasa ad, soyadınızı və ID-nizi daxil edin.
              </h3>
            </div>
            <div className="row">
              <div className="col-6">
                <UserForm
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  register={register}
                  errors={errors}
                />
              </div>

              <div className="col-6 ">
                <img className="imageBG" src={imageUrl} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
