import { createContext, useState } from "react";

export const TodoContext = createContext();

// Provider => Cung cap du lieu tu context
export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const contextValue = {
    todoList: todoList,
    updateTodoList: setTodoList,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};