import React, { useRef } from "react";

const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props)=>{
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    function submitHandler(event:React.FormEvent){
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length===0){
            return;
        }
        props.onAddTodo(enteredText);
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo list</label>
        <input id="text" type="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}
export default NewTodo;