// Global
import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import Card from "../../components/Card";

import axios from "axios";

// styles
import "./styles.css";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log("Deu certo");
        // console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="containerHome">
      <TopBar />
      {console.log(users)}
      <div className="containerCard">
        {users.map((post, key) => {
          return (
            <div className="cards" key={key}>
              <Card
                name={users[key].name}
                email={users[key].email}
                phone={users[key].phone}
                website={users[key].website}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
