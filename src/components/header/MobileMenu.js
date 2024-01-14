import React from "react";

export default function MobileMenu() {
  const data = ["Программа", "тренировка", "Росписание", "Контакт"];

  return (
    <div className="w-full mobile-menu flex flex-col absolute top-[80px] bg-white left-[0px]">
      {data.map((link, idx) => (
        <a
          className="text-[13px] text-black text-center font-medium uppercase py-3 border-y-[1px] border-gray-500 border-solid "
          href="/"
          key={idx}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
