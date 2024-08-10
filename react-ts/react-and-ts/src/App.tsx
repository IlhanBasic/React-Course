import Todos from './components/Todos'
import Todo from './models/Todo'
import NewTodo from './components/Newtodo';
import { useState } from 'react';
function App() {
  const [todos,setTodos] = useState<Todo[]>([])
  const addTodoHandler=(todoText:string)=>{
    const newTodo = new Todo(todoText);
    setTodos(prevVal=>{
      return prevVal.concat(newTodo);
    })
  }
  return (
    <>
    <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </>
  )
}

export default App
