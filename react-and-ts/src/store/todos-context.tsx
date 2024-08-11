import React, { ReactNode, useState } from "react";
import Todo from "../models/Todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  RemoveTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  RemoveTodo: () => {},
});

type Props = {
  children: ReactNode;
};

const TodosContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevVal) => {
      return prevVal.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    RemoveTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
