import React, { useEffect, useState } from "react";
import Button from "../../components/ui/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export default function Authentication() {
  const [authenticationValue, setAuthenticationValue] = useState({});
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");

    if (authToken) {
      navigate("/training");
    }
  }, [navigate]);

  function onChnage(e) {
    const { value, name } = e.target;

    setAuthenticationValue({ ...authenticationValue, [name]: value });
  }

  function onSubmit(e) {
    setLoading(true);
    axios
      .post(
        "https://training.pythonanywhere.com/auth/users/",
        {
          ...authenticationValue,
          re_password: authenticationValue.re_password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
        if (!response.status >= 200 && response.status < 300) {
          // Если статус ответа не в диапазоне 200-299 (успех), считаем его ошибкой
          throw new Error(JSON.stringify(response.data));
        }
        return response.data;
      })
      .then((data) => {
        console.log("успех", data);
        return axios.post(
          "https://training.pythonanywhere.com/auth/token/login/",
          authenticationValue,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      })
      .then((response) => {
        const data = response.data;
        if (data.auth_token) {
          setLoading(false);
          localStorage.setItem("auth_token", data.auth_token);
          localStorage.setItem("email", authenticationValue.email);
          navigate("/training");
        }
      })
      .catch((error) => {
        console.log("error", error.response.data.email[0]);
        setLoading(false);

        // Обработка ошибок здесь
        toast.error(error.response.data.email[0]);
      });
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className=" w-[800px]  p-5">
        <h3 className="text-center text-[30px] capitalize font-semibold">
          регистрация
        </h3>
        <div className="flex flex-col items-center gap-2 mt-9">
          <input
            type="email"
            placeholder="Введите почту"
            className="bg-[#D9D9D9] p-3 w-[420px]"
            onChange={onChnage}
            name="email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="bg-[#D9D9D9] p-3 w-[420px]"
            onChange={onChnage}
            required
          />
          <Button onClick={(e) => onSubmit(e)}>РЕГИСТРАЦИЯ</Button>

          <Link to="/login" className="underline text-[20px] font-medium">
            У меня есть аккаунт
          </Link>
          <Link to="/" className="underline text-[20px] font-medium">
            Назад
          </Link>
        </div>
      </div>
      {isLoading && <Loading />}
      <ToastContainer />
    </div>
  );
}
