import { useState } from "react";

export const Form = ({todo, setTodo }) => {
    const [text, setText] = useState();
    const btn = document.querySelector('button')
    const input = document.querySelector('input')
    const addTodo = () => {
        if(text.trim()){
            setTodo([
            {
                id: Math.random(),
                text: text,
                complete: false,
                delete: false,
                isEdit: false
            }, ...todo
        ]);
        }
        if(btn.click){
        input.value = ''
        }
    }
    return (
        <div className="todoCont">
            <h2>Add new Todo</h2>
            <input onChange={(e) => setText(e.target.value)} type="text" />
            <button onClick={addTodo} className="button">submit</button>
        </div>
    );
}

