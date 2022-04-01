import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../constants/Api";

function GameDetails() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = API + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url, {
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
            setGame(json);
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
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="game__details">
      <h2>{game.name}</h2>
    </div>
  );
}

export default GameDetails;
