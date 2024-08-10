import Todos from './components/Todos'
import Todo from './models/Todo'
function App() {
  const todo = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];
  return (
    <>
      <Todos items={todo}/>
    </>
  )
}

export default App
