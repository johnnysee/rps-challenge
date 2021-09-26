import React from 'react'
import UserComputer from './components/UserComputer'

const App = () => {
  return (
    <div>
      <h1 data-cy="header">Rock - Paper - Scissors</h1>
      <UserComputer />
      <h2 data-cy="computer">Computer</h2>
      <p>Hi</p>
    </div>
  )
}

export default App
