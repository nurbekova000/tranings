import React, { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./style/header.css";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isModile, setMobile] = useState(false);
  const [scroll, setScroll] = useState(0);

  function showMobileMenu() {
    setMobile((prev) => !prev);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      setScroll(window.scrollY);
    });
  });

  return (
    <div id="header" style={{ background: scroll > 520 && "white" }}>
      <div className="container">
        <div className=" flex justify-between items-center">
          <a
            className="text-[#ED563B] font-black text-[32px] uppercase"
            href="/"
          >
            Training
          </a>
          <div className=" xl:flex  items-center gap-[40px] lg:flex mg:hidden md:hidden sm:hidden s:hidden phone:hidden">
            <a
              href="/"
              className="text-[13px] text-white font-medium uppercase"
              style={{ color: scroll > 520 && "black" }}
            >
              Дом
            </a>
            <a
              href="#programing"
              className="text-[13px] text-white font-medium uppercase"
              style={{ color: scroll > 520 && "black" }}
            >
              Программа
            </a>
            <a
              href="#traning"
              className="text-[13px] text-white font-medium uppercase"
              style={{ color: scroll > 520 && "black" }}
            >
              тренировка
            </a>
            <a
              href="/#"
              className="text-[13px] text-white font-medium uppercase"
              style={{ color: scroll > 520 && "black" }}
            >
              Контакт
            </a>
            <Link to="/registration">
              <Button>Регистрация</Button>
            </Link>
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
