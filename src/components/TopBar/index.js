// Global
import React from "react";
import Logo from "../../assets/logo.png";

// Styles
import "./styles.css";

export default function TopBar() {
  return (
    <div className="containerTopBar">
      <img src={Logo} alt="Imagem da logo simbolizando uma API" />
      <h2>Sobre</h2>
    </div>
  );
}
