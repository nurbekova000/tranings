import React, { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { RiMenu2Line } from "react-icons/ri";

import "./style/header.css";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isModile, setMobile] = useState(false);

  function showMobileMenu() {
    setMobile((prev) => !prev);
  }

  return (
    <div id="header">
      <div className="container">
        <div className=" flex justify-between items-center">
          <a className="text-[#ED563B] font-black text-[32px] uppercase">
            Training
          </a>
          <div className=" xl:flex  items-center gap-[40px] lg:flex mg:hidden md:hidden sm:hidden s:hidden phone:hidden">
            <a
              href="#"
              className="text-[13px] text-white font-medium uppercase"
            >
              Дом
            </a>
            <a
              href="#"
              className="text-[13px] text-white font-medium uppercase"
            >
              Программа
            </a>
            <a
              href="#"
              className="text-[13px] text-white font-medium uppercase"
            >
              тренировка
            </a>
            <a
              href="#"
              className="text-[13px] text-white font-medium uppercase"
            >
              Росписание
            </a>
            <a
              href="#"
              className="text-[13px] text-white font-medium uppercase"
            >
              Контакт
            </a>
            <Button>Регистрация</Button>
          </div>
          <div className="menu-button  text-[40px]" onClick={showMobileMenu}>
            <RiMenu2Line />
          </div>
          {isModile && <MobileMenu />}
        </div>
      </div>
    </div>
  );
}
