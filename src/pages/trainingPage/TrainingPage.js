import React from "react";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import Training from "../training/Training";

export default function TrainingPage() {
  return (
    <>
      <AdminHeader />
      <Training admin={true} />
    </>
  );
}
