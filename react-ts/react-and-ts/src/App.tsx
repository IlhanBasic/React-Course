import Todos from './components/Todos'
import Todo from './models/Todo'
import NewTodo from './components/Newtodo';
function App() {
  const todo = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];
  const addTodoHandler=(todoText:string)=>{

  }
  return (
    <>
    <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todo}/>
    </>
  )
}

export default App
