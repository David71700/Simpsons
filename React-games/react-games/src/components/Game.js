const Game = ({ name, image, note }) => {
  return (
    <div className="cards">
      <img className="GameImage" src={image} alt={name} />
      <p>{name}</p>
      <p>{note}</p>
    </div>
  );
};

export default Game;
