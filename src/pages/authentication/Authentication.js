import React, { useEffect, useState } from "react";
import Button from "../../components/ui/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

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
    fetch("https://training.pythonanywhere.com/auth/users/", {
      method: "POST",
      body: JSON.stringify({
        ...authenticationValue,
        re_password: authenticationValue.re_password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => {
        fetch("https://training.pythonanywhere.com/auth/token/login/", {
          method: "POST",
          body: JSON.stringify(authenticationValue),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => data.json())
          .then((data) => {
            if (data.auth_token) {
              setLoading(false);
              localStorage.setItem("auth_token", data.auth_token);
              localStorage.setItem("email", authenticationValue.email);
              navigate("/training");
            }
          });
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
    </div>
  );
}
