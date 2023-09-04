import styled from "styled-components";


function App() {
  return <Button>this is tyled component btton</Button>;
}

export default App;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;