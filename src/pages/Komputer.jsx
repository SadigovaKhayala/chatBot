import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import database from "../database";
import "wc-bubble";
import logoAdmin from "./../assets/logo-abb.svg";
import Typing from "../Components/Typing";
import unlockPassPdf from "../pdfs/ADSelf-Services.pdf";
import InputForm from "../Components/InputForm";

const Komputer = (props) => {
  const imageUrl = "https://abb-bank.az/img/ibar-about-new-logo.svg";
  const [inputValue, setInputValue] = useState("");
  const messageBoxRef = useRef(null);
  const [pdfLinkIndex, setPdfLinkIndex] = useState(null);
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);
  const emailLink = `mailto:khayala.sadigova@abb-bank.az?subject=${encodeURIComponent(
    "diger muraciet"
  )}&body=${encodeURIComponent("salam")}`;
  const submittedData = localStorage.getItem("submittedData");
  const parsedData = submittedData ? JSON.parse(submittedData) : null;
  const name = parsedData && parsedData.name ? parsedData.name : "";
  const Pdfs = {
    6: unlockPassPdf,
  };
  //functions
  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
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
    setPdfLinkIndex(questionIndex);

    if (
      questionIndex >= 0 &&
      questionIndex < database.komputer.questions.length
    ) {
      const question = database.komputer.questions[questionIndex];
      const answer = database.komputer.answers[questionIndex];

      setChat((prevChat) => [
        ...prevChat,
        { type: "question", content: question },
        { type: "answer", content: answer },
      ]);
    } else {
      setChat((prevChat) => [
        ...prevChat,
        {
          type: "answer",
          content: "Zəhmət olmasa kategoriyaya uyğun seçim edəsiniz.",
        },
      ]);
    }

    setInputValue("");
    scrollToBottom();
    LoaderFunction();
  };
  const LoaderFunction = () => {
    setIsLoading(true);

    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loaderTimeout);
    };
  };

  //useeffects
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

  return (
    <div className="chatbotContent d-flex align-items-center justify-content-center">
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
                  Kompyuterlə bağlı bütün müraciətlər{" "}
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start justify-content-start answer">
              <div className="adminLogo">
                <img src={logoAdmin} alt="" />
              </div>
              <div className="">
                <div className="answerContainer">
                  {firstLoading ? (
                    <Typing />
                  ) : (
                    <div className="d-flex align-items-start answerContent w-full justify-content-center h-100  pt-3 text-align-center message">
                      <p>
                        Müraciətinizə uyğun kateqoriyanı seçib rəqəm ilə daxil
                        edin.
                      </p>
                      <p> 1.Yeni komputerin sifarişi</p>
                      <p>2. Mövcud komputerin yenisi ilə əvəz olunması.</p>
                      <p>3. Komputerinin təmirə göndərilməsi.</p>
                      <p>4. Komputerin Ram yaddaşının artırılması</p>
                      <p>5. Komputerə SSD yaddaşının əlavə edilməsi .</p>
                      <p>
                        6. Komputerə giriş parolunun dəyişdirilməsi və ya
                        unblock edilməsi.
                      </p>
                      <p>
                        7. Yeni əməliyyat sisteminin quraşdırılması (komputerin
                        format edilməsi)
                      </p>
                      <p>8. Digər müraciətlər. </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isLoading && scrollToBottom()}
            {chat.map((message, index) =>
              index === chat.length - 1 && isLoading ? (
                <div className="typingDiv">
                  <Typing />
                </div>
              ) : (
                <>
                  {message.type === "answer" ? (
                    <div className="d-flex align-items-start justify-content-start answer">
                      <div className="adminLogo">
                        <img src={logoAdmin} alt="" />
                      </div>

                      <div className="answerContainer">
                        <div className="d-flex align-items-start answerContent justify-content-center h-100 text-align-center  ">
                          <div className="d-flex align-items-start w-full justify-content-center flex-column  h-100 text-align-center message">
                            <p className="text-start">{message.content}</p>
                            {pdfLinkIndex + 1 === 8 && (
                              <a
                                href={emailLink}
                                target="_blank"
                                rel="noopener noreferrer">
                                Send Email
                              </a>
                            )}

                            {Pdfs[pdfLinkIndex + 1] && (
                              <a
                                className="text-start p-0 m-0"
                                href={Pdfs[pdfLinkIndex + 1]}
                                download="file_name.pdf">
                                PDF faylı yüklə
                              </a>
                            )}
                            {database.komputer.links[
                              parseInt(pdfLinkIndex + 1)
                            ] && (
                              <a
                                className="text-start p-0 m-0"
                                href={
                                  database.komputer.links[
                                    parseInt(pdfLinkIndex + 1)
                                  ]
                                }
                                target="_blank"
                                rel="noopener noreferrer">
                                Link
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="sender">
                      <div className="text-center mb-0">
                        <p className="text-center mb-0">{message.content}</p>
                      </div>
                    </div>
                  )}
                </>
              )
            )}
          </div>

          <InputForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputValue={inputValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Komputer;
