import styled from "styled-components"
import { Button } from "./Button"

function StartGame( {toggle}) {
  return (
    <Container>
        <div>
        <img src="dices.png" alt="Dice" />
            </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button 
            onClick={toggle} 
            >Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div `
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100vh;

.content {
    h1 {
        font-size: 96px ;
        white-space: nowrap;
    }
}
`

