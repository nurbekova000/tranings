import React from "react";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router-dom";

export default function Authentication() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className=" w-[800px]  p-5">
        <h3 className="text-center text-[30px] capitalize font-semibold">
          регистрация
        </h3>
        <form className="flex flex-col items-center gap-2 mt-9">
          <input
            type="email"
            placeholder="Введите почту"
            className="bg-[#D9D9D9] p-3 w-[420px]"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className="bg-[#D9D9D9] p-3 w-[420px]"
            required
          />
          <Button>РЕГИСТРАЦИЯ</Button>
          <Link to="/" className="underline text-[20px] font-medium">
            Назад
          </Link>
        </form>
      </div>
    </div>
  );
}
