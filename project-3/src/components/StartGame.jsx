import styled from "styled-components";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      color: #000;
      font-family: Poppins;
      font-size: 96px;
      font-style: normal;
      font-weight: 700;
      white-space: nowrap;
      line-height: normal;
    }
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.4s ease-in;

  &:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
    transition: background-color 0.4s ease-in;
  }
`;
export default StartGame;
