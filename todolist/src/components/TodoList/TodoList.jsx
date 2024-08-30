export const TodoList = ({todo}) => {
    return (
        <div className="todoCont">
            <h1>Todo List</h1>
            <input placeholder="search todos" type="text" />
            {
                todo && 
                todo.map((item) => (
                  <div className="todoItem">
                    <p>{item.text}</p>
                    <button>delete</button>
                </div>  
                ))
            }
        </div>
    );
}

