import React, { useState } from "react";

const UserComputer = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerValue, setComputerValue] = useState(null)

  const computerChoice = () => {
    const randomNumber = Math.round(Math.random()*2)+1
    setComputerValue(randomNumber)
  }

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

export default UserComputer;
