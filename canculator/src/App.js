// // import { useState } from "react"
// // import {Plus,Min, Multiplication, Division, Numbers} from "./button"
// // import "./style.css"
// // function App() {
// //   const [num,setNum] = useState()
// //   const num1 = document.getElementById('num1')
// //   const num2 = document.getElementById('num2')
// //   const result = document.querySelector('h1') 
// //   const plus = () =>{
// //     result.textContent = +num1.value + +num2.value
// //     num1.value = result.textContent
// //   }
// //   const minus = () => {
// //     result.innerText = num1.value - num2.value
// //     num1.value = result.textContent;
// //     num2.value = ''
// //   }
// //   const division = () => {
// //     result.innerText = num1.value / num2.value
// //     num1.value = result.textContent;
// //     num2.value = ''
// //   }
// //   const umn = () => {
// //     result.innerText = num1.value * num2.value
// //     num1.value = result.textContent;
// //     num2.value = ''
// //   }
// //   return (
// //     <div>
// //       <div className="container">
// //       <input type="number" id="num1" value={num}/>
// //       <input type="number" id="num2" value={num}/>
// //     </div>
// //     <div className="box">
// //      <Multiplication umn={umn}/>
// //      <Division division={division}/>
// //      <Min minus={minus}/> 
// //      <Plus plus={plus}/>  
// //     </div>
// //      <Numbers />
// //     <h1></h1>
// //     </div>
// //   );
// // }

// // export default App;
// import { useState } from "react";
// import { Plus, Min, Multiplication, Division, Numbers } from "./button";
// import "./style.css";

// function App() {
//   const [num1, setNum1] = useState(''); // Отдельное состояние для num1
//   const [num2, setNum2] = useState(''); // Отдельное состояние для num2
//   const [result, setResult] = useState(''); // Состояние для результата
//   const plus = () => {
//     setResult(+num1 + +num2); // Выполняем сложение и обновляем результат
//     setNum1(''); // Очищаем num1
//     setNum2(''); // Очищаем num2
//   }

//   const minus = () => {
//     setResult(num1 - num2);
//     setNum1('');
//     setNum2('');
//   }

//   const division = () => {
//     setResult(num1 / num2);
//     setNum1('');
//     setNum2('');
//   }
//   const umn = () => {
//     setResult(num1 * num2);
//     setNum1('');
//     setNum2('');
//   }

//   return (
//     <div>
//       <div className="container">
//         <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
//         <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
//       </div>
//       <div className="box">
//         <Multiplication umn={umn} />
//         <Division division={division} />
//         <Min minus={minus} />
//         <Plus plus={plus} />
//       </div>
//       <Numbers num1={num1} num2={num2}/>
//       <h1>{result}</h1> {/* Отображаем результат */}
//     </div>
//   );
// }

// export default App;
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
