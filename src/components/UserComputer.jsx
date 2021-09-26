import React, { useState, useEffect } from "react";

const UserComputer = () => {
  const [userChoice, setUserChoice] = useState(null);
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const [computerValue, setComputerValue] = useState(null);
  const [comparison, setComparison] = useState(null);

  const fetchComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * options.length);
    setComputerValue(options[randomNumber]);

  };

  useEffect(() => {
    switch (userChoice + computerValue) {
      case "ROCKSCISSORS":
      case "PAPERROCK":
      case "SCISSORSPAPER":
        setComparison("User wins!");
        break;
      case "SCISSORSROCK":
      case "PAPERSCISSORS":
      case "ROCKPAPER":
        setComparison("User lose!");
        break;
      case "SCISSORSSCISSORS":
      case "PAPERPAPER":
      case "ROCKROCK":
        setComparison("It is a draw!");
        break;
        default:
    }

  }, [userChoice, computerValue])

  const handleClick = (value) => {
    setUserChoice(value);
    fetchComputerChoice();
  };

  return (
    <div>
      <h2 data-cy="user">User's choose: {userChoice}</h2>
      {options.map((choice, index) => (
        <button key={index} data-cy="btn" onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h2 data-cy="computer">Computer choose: {computerValue}</h2>
      <h2 data-cy="comparison">{comparison}</h2>
    </div>
  );
};

export default UserComputer;
