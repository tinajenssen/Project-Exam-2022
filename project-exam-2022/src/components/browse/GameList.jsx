import { useState, useEffect } from "react";
import GameItem from "./GameItem";
import { API } from "../../constants/Api";
import Loading from "../common/Loading";

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Client-ID": "a2gip8xm0sne7gx7x3o2keiqmqay5r",
            Authorization: "Bearer e4v8t6br74munii2n6t7lc1a0954v0",
          },
        });

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setGames(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="games">
      {games.map(function (game) {
        const { id, name } = game;
        return <GameItem key={id} id={id} name={name} />;
      })}
    </div>
  );
}

export default GameList;
