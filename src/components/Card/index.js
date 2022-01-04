// Global
import React from "react";

// Styles
import "./styles.css";

export default function Card({ name, email, phone, website }) {
  return (
    <div className="contentCard">
      <h2>Nome: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Telefone: {phone}</h2>
      <h2>Website: {website}</h2>
    </div>
  );
}
