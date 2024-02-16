import React, { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (email) {
      setUser(email);
    }
  }, []);

  function navigateToHomePage() {
    navigate("/");
  }

  function resetAndLogOut() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("auth_token");
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="flex justify-between items-center gap-3 py-5">
        <h1
          className="text-[#ED563B] font-black text-[32px] uppercase cursor-pointer"
          onClick={navigateToHomePage}
        >
          Training
        </h1>
        <div className="flex items-center gap-3 py-5">
          <h3 className="text-2xl">{user}</h3>
          <Button onClick={resetAndLogOut}>Выйти</Button>
        </div>
      </div>
    </div>
  );
}
