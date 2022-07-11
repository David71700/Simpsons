import { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";

const GameList = () => {
  const [ListGames, setListGames] = useState([]);
  console.log();
  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games")
      .then((res) => console.log(res.data) || setListGames(res.data));
  }, []);
  return (
    <div>
      <div>Liste des jeux</div>
      {ListGames.map((game) => (
        <div key={game.id}>
          <Game
            name={game.name}
            image={game.background_image}
            note={game.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default GameList;
