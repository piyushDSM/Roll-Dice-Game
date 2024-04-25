import styled from "styled-components";

function NumberSelector({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <MainContainer>
      <p className="error">{error}</p>
      <div className="NumberBox">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => numberHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number👆</p>
    </MainContainer>
  );
}

export default NumberSelector;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .NumberBox {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 50px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  display: flex;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
`;
