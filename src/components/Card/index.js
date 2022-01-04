// Global
import React from "react";

// Styles
import "./styles.css";

export default function Card({ name, email, phone, website }) {
  return (
    <div className="contentCard">
      <h1>Nome: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Telefone: {phone}</h1>
      <h1>Website: {website}</h1>
    </div>
  );
}
