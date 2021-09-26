import React, { useState } from "react";

const UserComputer = () => {
  const [userChoice, setUserChoice] = useState(null);
  const options = ['rock', 'paper', 'scissors']
  const [computerValue, setComputerValue] = useState(null)

  const fetchComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*options.length)
    setComputerValue(options[randomNumber])
  }

  const handleClick = (value) => {
    setUserChoice(value);
  };

  return (
    <div>
      <h2 data-cy="user">User's choose: {userChoice}</h2>
      {options.map(choice => <button data-cy="scissors" onClick={() => handleClick(choice)}>{choice}</button>)}
      <h2 data-cy="computer">Computer</h2>
      <p>Hi</p>
    </div>
  );
};

export default UserComputer;
