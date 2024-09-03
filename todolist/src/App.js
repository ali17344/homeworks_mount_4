import { useState } from "react";
import { Form, TodoList } from "./components";
import './style.css';

function App() {
  const [todo, setTodo] = useState([]);
      const [searchTerm, setSearchTerm] = useState(''); 

  const deleteTodo = (id) =>{
    setTodo(todo.filter((item) => item.id !== id))
  }
  const completeTodo = (id) => {
    setTodo(todo.map((item) => item.id === id ? {...item, complete: !item.complete} : item))
  }
  const editTodo = ( id) => {
    setTodo(todo.map((item) => item.id === id ? {...item, isEdit: !item.isEdit} : item))
  }
  const changeText = (text,id) => {
    setTodo(todo.map((item) => item.id === id ? {...item,text:text, isEdit: !item.isEdit} : item))
  }
  
const searchTodo = (text) => { 
  setSearchTerm(text); 
}

const filteredTodos = todo.filter(item => 
  item.text.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="container">
      <Form todo={todo} setTodo={setTodo} />
      <TodoList  todo={filteredTodos} searchTerm={searchTerm}  deleteTodo={deleteTodo} completeTodo ={completeTodo} editTodo={editTodo} changeText={changeText} searchTodo={searchTodo} />
    </div>
  );
}

export default App;

