import React from "react";
import Header from "../../components/header/Header";
import Home from "../home/Home";
import Program from "../program/program";
import Register from "../register/Register";
import TeamProfi from "../teamProfi/TeamProfi";
import Map from "../map/Map";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Program />
      <Register />
      <TeamProfi />
      <Map />
    </>
  );
}
