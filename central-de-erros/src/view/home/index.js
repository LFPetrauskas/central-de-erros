import React from "react";
import "./style.css";
import NavBar from "../../components/navbar/";
import Dashboard from "../../components/Dashboard";
import { useSelector } from "react-redux";

function Home() {
  const erroSelecionado = useSelector(state => state.erroSelecionado);
  return (
    <>
      <NavBar />
      <Dashboard />
    </>
  );
}

export default Home;
