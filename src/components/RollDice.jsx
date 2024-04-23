
import styled from "styled-components"

function RollDice( {roledice, currentDice}) {

  
  return (
    <DiceContainer>
       <div className="dice" 
       onClick= {roledice}>
        <img src={`/dice/dice_${currentDice}.png`} alt="dice" />
       </div>
       <p>Click on DICE to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div `

    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
     font-size: 25px;
     font-weight: 400;
     margin-top: 10px;
    }

    .dice {
    cursor: pointer;
}
`