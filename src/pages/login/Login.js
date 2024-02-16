import React, { useEffect, useState } from "react";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [authenticationValue, setAuthenticationValue] = useState({});
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("auth_token");

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
        "https://training.pythonanywhere.com/auth/token/login/",
        authenticationValue,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => response.data)
      .then((data) => {
        if (data.auth_token) {
          setLoading(false);
          sessionStorage.setItem("auth_token", data.auth_token);
          sessionStorage.setItem("email", authenticationValue.email);
          navigate("/training");
        }
      })
      .catch((error) => {
        setLoading(false);

        toast.error(error.response.data.non_field_errors[0]);
      });
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className=" w-[800px]  p-5">
        <h3 className="text-center text-[30px] capitalize font-semibold">
          Войти
        </h3>
        <div className="flex flex-col items-center gap-2 mt-9">
          <input
            type="email"
            placeholder="Введите почту"
            className="bg-[#D9D9D9] p-3 w-[420px]"
            name="email"
            onChange={onChnage}
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
          <Button onClick={(e) => onSubmit()}>Войти</Button>

          <Link
            to="/registration"
            className="underline text-[20px] font-medium"
          >
            Создать новый аккаунт
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
