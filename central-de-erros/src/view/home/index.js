import React from "react";
import "./style.css";
import NavBar from "../../components/navbar/";
import Dashboard from "../../components/Dashboard";
import { useSelector } from "react-redux";
import ErroDetails from "../ErroDetails";

function Home() {
  return (
    <>
      <NavBar />
      <Dashboard />
    </>
  );
}

export default Home;
