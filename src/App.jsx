import React from 'react'

const App = () => {
  return (
    <div>
      <h1 data-cy="header">Rock - Paper - Scissors</h1>
      <h2 data-cy="user">User</h2>
      <button data-cy="rock">Rock</button>
      <button data-cy="paper">Paper</button>
      <button data-cy="scissor">Scissor</button>
      <h2 data-cy="computer">Computer</h2>
    </div>
  )
}

export default App
