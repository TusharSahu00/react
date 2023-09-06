import { styled } from "styled-components";

const RoleDice = ({currentDice, setCurrentDice}) => {
  

  const generateRandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomnumber(1, 7);
    setCurrentDice((prev) => randomNumber);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick = {roleDice}>
        <img src={`./dices/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
