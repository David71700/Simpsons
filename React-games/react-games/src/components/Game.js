import "./Game.css";

const Game = ({ name, image, note }) => {
  return (
    <div className="cards">
      <img className="game_image" src={image} alt={name} />
      <p>{name}</p>
      <p>{note}</p>
    </div>
  );
};

export default Game;
