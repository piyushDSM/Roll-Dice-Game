import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import { Button, OutlineButton } from "./Button"
import Rules from "./Rules"

function GamePlay() {
    const [score, setScore] = useState(0)
    const[selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState(" ")
    const [showRule, setShowRule] = useState (false)

    const generateRandom = (min,max) => { 
        return Math.floor(Math.random() * (max-min) + min);
    }
    const roledice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number")
          return  
        }
    
        const randonNumber = generateRandom(1,7);
        setCurrentDice((prev) => randonNumber)

        if(selectedNumber == randonNumber){
            setScore((prev) => prev + randonNumber)
        }
        else {
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined)
    }

    const reset = () => {
        setScore(0)
    }



  return (
    <MainContainer>
       <div className="top_section">
       <TotalScore  score ={score} />
       <NumberSelector 
       error={error} 
       setError = {setError}
       selectedNumber={selectedNumber} 
       setSelectedNumber={setSelectedNumber} />
       </div>
       <RollDice currentDice= {currentDice} roledice={roledice} />
       <div className="btn">
        <OutlineButton onClick={reset}>Reset</OutlineButton>
        <Button onClick={() => setShowRule(prev => !prev)}> {showRule ? "Hide" : "Show"} Rules</Button>
       </div>
       {showRule &&  <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div `

padding-top: 50px;

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btn {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`