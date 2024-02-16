import React, { useState } from "react";
import "./style/map.css";
import Button from "../../components/ui/button/Button";
import axios from "axios";

const Map = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSuccess, setSuccess] = useState(false);

  function onChange(e) {
    const { value, name } = e.target;

    setInputData({ ...inputData, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(inputData);

    const newFeedback = new FormData();

    newFeedback.append("email", inputData.email);
    newFeedback.append(
      "message",
      `Номер телефона: ${inputData.phone} \n ФОИ: ${inputData.name} \n Cообщение: ${inputData.message}`
    );

    axios
      .post("https://training.pythonanywhere.com/feedback/", newFeedback)
      .then(({ data }) => {
        setSuccess(true);

        setInputData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      });
  }

  return (
    <div id="map">
      <div className="map-content">
        <div className="map-rigth">
          {!isSuccess ? (
            <form className="input-group" onSubmit={onSubmit}>
              <div className="inputs-top">
                <input
                  type="text"
                  name="name"
                  placeholder="ФИО*"
                  onChange={onChange}
                  value={inputData.name}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail*"
                  onChange={onChange}
                  value={inputData.email}
                  required
                />
              </div>
              <div className="input-mid">
                <input
                  type="number"
                  name="phone"
                  placeholder="+996 --- ---"
                  value={inputData.phone}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="input-bottom">
                <textarea
                  name="message"
                  type="text"
                  className="w-full mt-5 h-[200px] p-[10px] outline-none"
                  placeholder="Ваше сообщение... "
                  value={inputData.message}
                  onChange={onChange}
                />
              </div>
              <Button>Отправить</Button>
            </form>
          ) : (
            <button
              className="text-white text-2xl"
              onClick={() => {
                setSuccess(false);
              }}
            >
              Отправить еще
            </button>
          )}
        </div>
      </div>
      <div className="conatiner">
        <div className="map">
          <p style={{ textAlign: "center", padding: "30px 0" }}>
            Copyright © 2020 Training Studio - Designed by{" "}
            <span>TemplateMo</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
