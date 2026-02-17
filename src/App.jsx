import Die from "./components/Die"
import React from "react"
import { nanoid } from "nanoid"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())
    
  function generateAllNewDice() {
      return new Array(10)
          .fill(0)
          .map(() => ({
            id: nanoid(),
            value: Math.ceil(Math.random() * 6), 
            isHeld: false
          }))
  }
  
  function rollDice() {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
      }))
  }

  function hold(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
  
  const diceElements = dice.map(dieObj => (
    <Die 
        key={dieObj.id} 
        value={dieObj.value} 
        isHeld={dieObj.isHeld} 
        hold={() => hold(dieObj.id)}
    />
  ))
  
  return (
      <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
  )
}
