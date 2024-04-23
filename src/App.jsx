import StartGame from "./components/StartGame"
import "./App.css"
import { useState } from "react"
import GamePlay from "./components/GamePlay"
function App() {
  
  const [isGameStarted, setIsGameStarted] = useState(false)
  const ToggleGamePlay = () => {
    setIsGameStarted ((prev) => !prev);
  }

  return (
    <>
    {
     isGameStarted ? <GamePlay /> :  <StartGame toggle = {ToggleGamePlay}/>
    }
   
    </>
  )
}

export default App
