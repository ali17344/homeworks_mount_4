import { useState } from "react";
import { Form, TodoList } from "./components";
import './style.css';

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="container">
      <Form todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
