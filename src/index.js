import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./../styles/Chatbot.scss";
// import { Button } from "react-bootstrap";
// import InputGroup from "react-bootstrap/InputGroup";
// import Form from "react-bootstrap/Form";

// const ChatBot = () => {
//   const [categorySelect, SetcategorySelect] = useState("");
//   const navigate = useNavigate();
//   const imageUrl = "https://abb-bank.az/img/ibar-about-new-logo.svg";

//   const handleChange = (e) => {
//     const { value } = e.target;
//     SetcategorySelect(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Value submitted:", categorySelect);
//     categorySelect == 1 && navigate("/computer");
//     categorySelect == 2 && navigate("/printer");
//     categorySelect == 3 && navigate("/email");
//   };
//   return (
//     <div className="container-fluid w-full vh-100 d-flex flex-column justify-content-between chatbot-container">
//       <div className="innerContainer">
//         <img src={imageUrl} alt="background" />
//       </div>
//       <div className="w-full d-flex flex-column justify-content-center align-items-center">
//         <div className="header w-75 mt-5 d-flex flex-column justify-content-center align-items-center text-center">
//           <h2 className="p-3">
//             Salam dəyərli həmkarımız! Müraciət hansı mövzu ilə bağlıdır
//             aşağıdakılardan seçib rəqəm yazılması Sizdən xahiş olunur:
//           </h2>
//         </div>

//         <div className="selectBox mt-5 w-100 p-5 d-flex flex-column justify-content-start align-items-start">
//           <h5 className="selectCategory">1.Komputer</h5>
//           <h5 className="selectCategory">2.Printer</h5>
//           <h5 className="selectCategory">3.Email</h5>
//         </div>
//       </div>
//       <div className="d-flex flex-column justify-content-center align-items-center  pb-5 mt-5">
//         <form onSubmit={handleSubmit} className="w-75 d-flex">
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               id="inputValue"
//               name="inputValue"
//               className="form-control"
//               value={categorySelect}
//               onChange={handleChange}
//               title="Please enter a value "
//               aria-describedby="button-addon2"
//               placeholder="Seçiminizi daxil edin"
//               required
//             />
//             <button
//               onSubmit={handleSubmit}
//               className="btn btn-light"
//               id="button-addon2"
//               type="button">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;
