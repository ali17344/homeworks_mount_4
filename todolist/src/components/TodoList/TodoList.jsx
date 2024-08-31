import { FaDeleteLeft } from "react-icons/fa6";
import { LuClipboardEdit } from "react-icons/lu"
import { EditTodo } from "../EditTodo/EditTodo";
export const TodoList = ({todo, deleteTodo, completeTodo, editTodo,changeText}) => {
    return (
        <div className="todoCont">
            <h1>Todo List</h1>
            <input placeholder="search todo's" type="text" />
            {
                todo && 
                todo.map((item) => (
                  <div key={item.id} className="todoItem">
                    {
                        item.isEdit === true ? (
                            <EditTodo text={item.text} id={item.id} changeText={changeText} />
                        )
                        :(
                            <>
                            <p className={item.complete ? 'complete' : ''} onClick={() => completeTodo(item.id)}>{item.text}</p>
                            <div>
                        <button className="deleteBtn" onClick={() => editTodo(item.id)}>
                        <LuClipboardEdit color="white" />
                        </button>
                        <button onClick={() => deleteTodo(item.id) }className="deleteBtn" >
                        <FaDeleteLeft color="white"/>
                        </button>   
                            </div>
                        
                            </>
                        )
                    }
                    
                    
                </div>  
                ))
            }
        </div>
    );
}

