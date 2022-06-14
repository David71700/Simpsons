import React from "react";

const Quotecard = (props) => {
  const {simpson, getSimpson} = props;

  return (
    <div>
      <button onClick={getSimpson}>Une autre citation, TOOO!!</button>
      <h1>{simpson.character}</h1>
      <img src={simpson.image} alt={simpson.character}></img>
      <p>{simpson.quote}</p>
    </div>
  );
};

export default Quotecard;