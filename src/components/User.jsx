import React, { useState } from "react";

const User = () => {
  const [userChoice, setUserChoice] = useState(null);

  const handleClick = (value) => {
    setUserChoice(value);
  };

  return (
    <div>
      <h2 data-cy="user">User's choose: {userChoice}</h2>
      <button data-cy="rock" onClick={() => handleClick("Rock")}>
        Rock
      </button>
      <button data-cy="paper" onClick={() => handleClick("Paper")}>
        Paper
      </button>
      <button data-cy="scissors" onClick={() => handleClick("Scissors")}>
        Scissors
      </button>
    </div>
  );
};

export default User;
