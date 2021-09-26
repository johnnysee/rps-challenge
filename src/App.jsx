import React, { useState } from 'react'

const App = () => {
  const [userChoice, setUserChoice] = useState(null)

  const handleClick = (value) => {
    setUserChoice(value)
  }

  return (
    <div>
      <h1 data-cy="header">Rock - Paper - Scissors</h1>
      <h2 data-cy="user">User's choose: {userChoice}</h2>
      <button data-cy="rock" onClick={() => handleClick('Rock')}>Rock</button>
      <button data-cy="paper" onClick={() => handleClick('Paper')}>Paper</button>
      <button data-cy="scissors" onClick={() => handleClick('Scissors')}>Scissors</button>
      <h2 data-cy="computer">Computer</h2>
    </div>
  )
}

export default App
