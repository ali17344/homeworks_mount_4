import { useState } from "react";
import  "./style.scss"
function App() {
 const [time,setTime] = useState(10)
 const [click,setClick] = useState(0)
 const [result,setResult] = useState()
 let interval;
 const timeFunc = () => {
  interval = setInterval(() => {
    setTime((timeFUNC) => {
      if(timeFUNC > 1){
        return timeFUNC -1
      }else{
        clearInterval(interval)
        return 0
      }
    })},1000)}
 const clicker = () => {
  setClick((clickFunc) => clickFunc + 1)
  if(time > 0 && click === 0){
    timeFunc()
  }
  if(time === 0){
    setResult((click + 1) / 10)
  }
 }
  return (
    <div className="container">
      <div>
      <h1>{time}</h1>
      <h1>{click}</h1>
      <h1>{result}</h1>
      <button onClick={clicker} className="btn" disabled={time < 0}  >Click</button>
      </div>

    </div>
  );
}

export default App;

