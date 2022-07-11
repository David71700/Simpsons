import { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";

const GameList = (props) => {
  const [listGames, setListGames] = useState([]);
  const [bestGame, setBestGame] = useState([]);
  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games")
      .then((res) => console.log(res.data) || setListGames(res.data));
  }, []);

  function ShowBestGames() {
    setBestGame(!bestGame);
  }

  return (
    <div>
      <div>Liste des jeux</div>
      <button onClick={ShowBestGames}> Meilleur jeux</button>
      {listGames
        .filter((listGame) => !bestGame || listGame.rating > 4.5)
        .map((game) => (
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
