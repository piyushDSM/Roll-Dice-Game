import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className="text">
            <ul> 
            <li><p>Select Any Number</p></li>
            <li><p>Click On Dice Image</p></li>
            <li><p>After Click on dice if SELECTED number is EQUAL to the dice number you will get same point as dice {" "}</p></li>
            <li><p>If you get the WRONG guess then 2 Points will be dedcuted</p></li>
            </ul>
        </div>
    
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div `
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 50px;
   
    

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:  25px;
        font-weight: 400;
        position: center;

    }
    .text{
        margin-top: 25px;

    }
`