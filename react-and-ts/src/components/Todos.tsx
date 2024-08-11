import React from "react";
import TodoList from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './Todos.module.css';
const Todos:React.FC =()=>{
    const todosCtx = useContext(TodosContext);
    return <ul className={classes.todos}>
        {todosCtx.items.map(item=>{
            return <TodoList key={item.id} text={item.text} onRemoveTodo={todosCtx.RemoveTodo.bind(null,item.id)}/>
        })}
    </ul>
}
export default Todos;