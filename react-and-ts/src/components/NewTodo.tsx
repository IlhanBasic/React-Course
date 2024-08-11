import React, { useRef } from "react";
import classes from './NewTodo.module.css';
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
const NewTodo:React.FC = ()=>{
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    function submitHandler(event:React.FormEvent){
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length===0){
            return;
        }
        todosCtx.addTodo(enteredText);
    }
    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo list</label>
        <input id="text" type="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}
export default NewTodo;