import React from 'react'
import User from './components/User'

const App = () => {

  return (
    <div>
      <h1 data-cy="header">Rock - Paper - Scissors</h1>
      <User />
      <h2 data-cy="computer">Computer</h2>
      <p>{(Math.round(Math.random()*2)+1)}</p>
    </div>
  )
}

export default App
