import { useState } from 'react'
import Scoring from './components/Scoring'

function App() {
 
  return (
    <Scoring 
      bluescore={0} 
      redscore={0} 
      blueteams={[]} 
      redteams={[]}>
    </Scoring>
    )
}

export default App
