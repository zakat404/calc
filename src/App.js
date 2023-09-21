import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import Screen from './components/Screen';
import Wrapper from './components/Wrapper';
import CalcProvider from './Context/CalcContex';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {
  return (
    <CalcProvider className="App">
      <Wrapper>
        <Screen />
        <ButtonBox >
          {btnValues.flat().map((btn, i) => (
            <Button 
              value={btn}
              key={i}
            />    
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
