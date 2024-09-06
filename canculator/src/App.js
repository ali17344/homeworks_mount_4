import { useState } from "react";
import { Plus, Min, Multiplication, Division } from "./button";
import "./style.css";

function App() {
  const [num1, setNum1] = useState(''); 
  const [num2, setNum2] = useState(''); 
  const [result, setResult] = useState('');
  const [activeInput, setActiveInput] = useState('num1'); 

  const handleNumberClick = (number) => {
    if (activeInput === 'num1') {
      setNum1(num1 + number);
    } else {
      setNum2(num2 + number); 
    }
  };

  const plus = () => {
    setResult(+num1 + +num2); 
    setNum1(''); 
    setNum2(''); 
  }

  const minus = () => {
    setResult(num1 - num2);
    setNum1('');
    setNum2('');
  }

  const division = () => {
    setResult(num1 / num2);
    setNum1('');
    setNum2('');
  }

  const umn = () => {
    setResult(num1 * num2);
    setNum1('');
    setNum2('');
  }

  return (
    <div>
      <div className="container">
        <input 
          type="number" 
          value={num1} 
          onFocus={() => setActiveInput('num1')}
          onChange={(e) => setNum1(e.target.value)} 
        />
        <input 
          type="number" 
          value={num2} 
          onFocus={() => setActiveInput('num2')}
          onChange={(e) => setNum2(e.target.value)} 
        />
      
     
      </div>
      <div className="box">
        <Multiplication umn={umn} />
        <Division division={division} />
        <Min minus={minus} />
        <Plus plus={plus} />
      </div>
       <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}</div>
      <h1>{result}</h1> 
    </div>
  );
}

export default App;

