import styled from "styled-components";
const StartGame = () => {
  return (
    <Container>
      <div>
      <img src="./dices.png" alt="" />
      </div>
      <div>
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  display:flex;
  margin:0 auto;
  height:100vh;
`;

const Button = styled.button`
color:white;
padding:10 18px;
background-color: #00000;
border-radius:5px;
min-width:220px;
border:none;
`;
export default StartGame;
