import React from "react";
import Button from "../ui/button/Button";

export default function AdminHeader() {
  return (
    <div className="container">
      <div className="flex justify-end items-center gap-3 py-5">
        <h3 className="text-2xl">erlanklink@gmail.com</h3>
        <Button>Выйти</Button>
      </div>
    </div>
  );
}
