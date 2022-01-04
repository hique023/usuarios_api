// Global
import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import Card from "../../components/Card";

import axios from "axios";

import Loading from "../../assets/loading.gif";

// styles
import "./styles.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log("Deu certo");
        // console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return (
      <div className="loadingStyle">
        <img src={Loading} alt="Blocos girando sinalizando um carregamento" />
      </div>
    );
  }

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
