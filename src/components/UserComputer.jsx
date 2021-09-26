import React, { useState, useEffect } from "react";

const UserComputer = () => {
  const [userChoice, setUserChoice] = useState(null);
  const options = ["rock", "paper", "scissors"];
  const [computerValue, setComputerValue] = useState(null);
  const [comparison, setComparison] = useState(null);

  const fetchComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * options.length);
    setComputerValue(options[randomNumber]);

  };

  useEffect(() => {
    switch (userChoice + computerValue) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        setComparison("User wins!");
        break;
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
        setComparison("User lose!");
        break;
      case "scissorsscissors":
      case "paperpaper":
      case "rockrock":
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
        <button key={index} data-cy="scissors" onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h2 data-cy="computer">Computer choose: {computerValue}</h2>
      <h2>{comparison}</h2>
    </div>
  );
};

export default UserComputer;
