import React, { useEffect } from "react";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import Training from "../training/Training";
import { useNavigate } from "react-router-dom";

export default function TrainingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");

    if (!authToken) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <AdminHeader />
      <Training admin={true} />
    </>
  );
}
