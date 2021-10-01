import React, { useState, useEffect } from "react";
import { Header, Container, Button, Message } from "semantic-ui-react";

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
        setComparison("USER WINS!");
        break;
      case "SCISSORSROCK":
      case "PAPERSCISSORS":
      case "ROCKPAPER":
        setComparison("USER LOSE!");
        break;
      case "SCISSORSSCISSORS":
      case "PAPERPAPER":
      case "ROCKROCK":
        setComparison("IT IS A DRAW!");
        break;
      default:
    }
  }, [userChoice, computerValue]);

  const handleClick = (value) => {
    setUserChoice(value);
    fetchComputerChoice();
  };

  return (
    <Container>
      <Header as="h1" data-cy="header">
        Rock - Paper - Scissors
      </Header>
      <Header as="h2" data-cy="user">
        You choose: {userChoice}
      </Header>
      {options.map((choice, index) => (
        <Button color='blue' key={index} data-cy="btn" onClick={() => handleClick(choice)}>
          {choice}
        </Button>
      ))}
      <Header as="h2" data-cy="computer">
        Computer choose: {computerValue}
      </Header>
      <Message data-cy="comparison">
        {comparison}
      </Message>
    </Container>
  );
};

export default UserComputer;
