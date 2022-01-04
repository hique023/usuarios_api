// Global
import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import Card from "../../components/Card";

import axios from "axios";

// styles
import "./styles.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log("Deu certo");
        // console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="containerHome">
      <TopBar />
      <div className="containerCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
