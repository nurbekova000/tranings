import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-[#ED563B] px-[18px] py-[13px] text-white uppercase">
      {children}
    </button>
  );
}
