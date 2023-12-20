import React from "react";

export default function Button({ children, onClick = (e) => {} }) {
  return (
    <button
      className="bg-[#ED563B] px-[18px] py-[13px] text-white uppercase"
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
}
